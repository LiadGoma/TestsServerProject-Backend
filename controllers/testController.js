const testRepository = require("../DAL/repositories/testRepository");
const exportReqBody = require("../services/extractReqBody");

const getAllTests = async () => {
    const tests = await testRepository.getAllTest();
    return tests;
}
const createNewTest = async (req) => {
    const newTest = exportReqBody.extractTestBody(req);
    const savedTest = await testRepository.createNewTest(newTest);
    return savedTest;
}

const getTestByField = async (req) => {
    const field = req.params.field;
    const test = await testRepository.getTestByField(field);
    return test;
}

const getTestById = async (req) => {
    const id = req.params.id;
    const test = await testRepository.getTestById(id);
    return test;
}

const updateTest = async (req) => {
    const newTest = exportReqBody.extractTestBody(req);
    const id = req.params.id;
    const res = await testRepository.updateTest(id, newTest);
    return res;
}

module.exports = {
    getAllTests,
    createNewTest,
    getTestByField,
    getTestById,
    updateTest
}