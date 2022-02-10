const testRepository = require("../DAL/repositories/testRepository");

const getAllTests = async () => {
    const tests = await testRepository.getAllTest();
    return tests;
}
const createNewTest = async (req) => {
    const newTest = {
        testName: req.body.testName,
        field: req.body.field,
        testIntroduction: req.body.testIntroduction,
        creatorEmail: req.body.creatorEmail,
        passingGrade: req.body.passingGrade,
        canShowAnswers: req.body.canShowAnswers,
        certificationURL: req.body.certificationURL,
        successText: req.body.successText,
        failureText: req.body.failureText,
        lastUpdated: req.body.lastUpdated,
        questions: req.body.questions
    }
    const savedTest = await testRepository.createNewTest(newTest);
    return savedTest;
}

const getTestByField = async (req) => {
    const field = req.body.field;
    const test = await testRepository.getTestByField(field);
    return test;
}

const getTestById = async (req) => {
    const id = req.body.id;
    const test = await testRepository.getTestById(id);
    return test;
}

const updateTest = async (req) => {
    const newTest = {
        testName: req.body.testName,
        field: req.body.field,
        testIntroduction: req.body.testIntroduction,
        creatorEmail: req.body.creatorEmail,
        passingGrade: req.body.passingGrade,
        canShowAnswers: req.body.canShowAnswers,
        certificationURL: req.body.certificationURL,
        successText: req.body.successText,
        failureText: req.body.failureText,
        lastUpdated: req.body.lastUpdated,
        questions: req.body.questions
    }
    const id = req.body.id;
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