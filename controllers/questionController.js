const questionRepository = require("../DAL/repositories/questionRepository");
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

const createNewQuestion = async (req) => {
    const newQuestion =extractReqBody.extractQuestionBody(req);
    const questionSaved = await questionRepository.createNewQuestion(newQuestion);
    return questionSaved;
}

const getQuestionById = async (req) => {
    const id = req.params.id;
    const question = await questionRepository.getQuestionById(id);
    return question;
}
const updateQuestion = async (req) => {
    const newQuestion= extractReqBody.extractQuestionBody(req);
    const response = await questionRepository.updateQuestion(newQuestion, req.params.id);
    return response;
}

const getAllQuestions = async ({query}) => {
    const questions = await questionRepository.getAllQuestions(query);
    return questions;
}

const deleteQuestion = async (req) => {
    const id = req.params.id;
    const deletedQuestion = await questionRepository.deleteQuestion(id);
    return deletedQuestion;
}

module.exports = {
    createNewQuestion,
    getQuestionById,
    updateQuestion,
    getAllQuestions,
    deleteQuestion
}

