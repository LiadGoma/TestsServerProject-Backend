const answeredTestRepository = require("../DAL/repositories/answeredTestRepository");
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

const getAllAnsweredTests = async ({query}) => {
    const answeredTests = await answeredTestRepository.getAllAnsweredTests(query);
    return answeredTests;
}

const createNewAnsweredTest = async (req) => {
    const newAnsweredTest = extractReqBody.extractAnsweredTestBody(req);
    const savedAnsweredTest = answeredTestRepository.createNewAnsweredTest(newAnsweredTest);
    return savedAnsweredTest;
}

const getAnsweredTestById = async (req) => {
    const id = req.params.id;
    const answeredTest = await answeredTestRepository.getAnsweredTestById(id);
    return answeredTest;
}
const updateAnsweredTest = async (req) => {
    const id = req.body.id;
    const newAnsweredTest = extractReqBody.extractAnsweredTestBody(Req);
    const updatedAnsweredTest = await answeredTestRepository.updateAnsweredTest(id, newAnsweredTest);
    return updatedAnsweredTest;
}

module.exports = {
    getAllAnsweredTests,
    createNewAnsweredTest,
    getAnsweredTestById,
    updateAnsweredTest
}