const testRepository = require("../DAL/repositories/testRepository");
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

const getAllTests = async ({ query }) => {      
    const tests = await testRepository.getAllTest(query);
    return tests;
    } 
    
const createNewTest = async (req) => {
    const newTest = extractReqBody.extractTestBody(req);
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
    const id = req.params.id;
    const res = await testRepository.updateTest(id, newTest);
    return res;
}

module.exports = {
    getAllTests,
    createNewTest,
    getTestById,
    updateTest
}