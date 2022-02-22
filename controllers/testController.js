const testRepository = require("../DAL/repositories/testRepository");
const questionsRepository = require("../DAL/repositories/questionRepository")
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

const getAllTests = async ({ query }) => {      
    const tests = await testRepository.getAllTest(query);
    return tests;
    } 
    
const createNewTest = async (req) => {
    const newTest = extractReqBody.extractTestBody(req);
    newTest.questions = await questionsRepository.getAllQuestions({_id:{$in:newTest.questions}});
    const savedTest = await testRepository.createNewTest(newTest);
    return savedTest;
}

const getTestById = async (req) => {
    const id = req.params.id;
    const test = await testRepository.getTestById(id);
    return test;
}

const updateTest = async (req) => {
    const newTest = extractReqBody.extractTestBody(req);
    newTest.questions = await questionsRepository.getAllQuestions({_id:{$in:newTest.questions}});
    console.log(newTest)
    const id = req.params.id;
    const res = await testRepository.updateTest(id, newTest);
    console.log(res);
    return res;
}

module.exports = {
    getAllTests,
    createNewTest,
    getTestById,
    updateTest
}