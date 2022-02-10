const questionRepository = require("../DAL/repositories/questionRepository");
const extractReqBody = require("../services/extractReqBody");

const createNewQuestion = async (req) => {
    const newQuestion =extractReqBody.extractQuestionBody(req);
    const questionSaved = await questionRepository.createNewQuestion(newQuestion);
    return questionSaved;
}

const getQuestionByField = async () => {
    const field = req.params.field;
    const question = await questionRepository.getQuestionByField(field);
    return question;
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

const getAllQuestions = async () => {
    const questions = await questionRepository.getAllQuestions();
    return questions;
}

const deleteQuestion = async (req) => {
    const id = req.params.id;
    const deletedQuestion = await questionRepository.deleteQuestion(id);
    return deletedQuestion;
}

module.exports = {
    createNewQuestion,
    getQuestionByField,
    getQuestionById,
    updateQuestion,
    getAllQuestions,
    deleteQuestion
}

