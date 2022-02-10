const { Question } = require("../models/question");

const createNewQuestion = async (question) => {

    newQuestion = new Question({
        ...question
    });
    await newQuestion.save();
    return newQuestion;
}

const getAllQuestions = async () => {
    const questions = await Question.find();
    return questions;
}

const getQuestionById = async (id) => {
    const question = await Question.findById(id);
    return question;
}

const getQuestionByField = async (field) => {
    const question = await Question.findOne({ field: field });
}

const updateQuestion = async (question, id) => {
    try {
        Question.findOneAndUpdate({ id: id }, question);
        return true;
    } catch (ex) {
        return false;
    }
}

const deleteQuestion = async (id) => {
    try {
        const deletedQuestion = Question.findOneAndDelete({ id: id });
        if (!deletedQuestion) return false;
        return deletedQuestion;
    } catch (error) {
        return false;
    }

}
module.exports = {
    createNewQuestion,
    getQuestionByField,
    getQuestionById,
    updateQuestion,
    getAllQuestions,
    deleteQuestion
}

