const answeredTestRepository = require("../DAL/repositories/answeredTestRepository");
const extractReqBody = require("../services/extractReqBody");
const getAllAnsweredTests = async () => {
    const answeredTests = await answeredTestRepository.getAllAnsweredTests();
    return answeredTests;
}

const createNewAnsweredTest = async (req) => {
    const newAnsweredTest = extractReqBody.extractAnsweredTestBody(req);
    const savedAnsweredTest = answeredTestRepository.createNewAnsweredTest(newAnsweredTest);
    return savedAnsweredTest;

}
const getAnsweredTestByField = async (req) => {
    const field = req.params.field;
    const answeredTest = await answeredTestRepository.getAnsweredTestByField(field);
    return answeredTest;
}
const getAnsweredTestById = async (req) => {
    const id = req.params.id;
    const answeredTest = await answeredTestRepository.getAnsweredTestById(id);
    return answeredTest;
}
// const updateAnsweredTest = async (req) => {
//     const id = req.body.id;
//     const newAnsweredTest = extractReqBody.extractAnsweredTestBody(Req);
//     const updatedAnsweredTest = await answeredTestRepository.updateAnsweredTest(id, newAnsweredTest);
//     return updatedAnsweredTest;
// }

module.exports = {
    getAllAnsweredTests,
    createNewAnsweredTest,
    getAnsweredTestByField,
    getAnsweredTestById,
    // updateAnsweredTest
}