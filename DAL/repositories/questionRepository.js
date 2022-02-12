const { Question } = require("../models/question");

const createNewQuestion = async (question) => {

    newQuestion = new Question({
        ...question
    });
    await newQuestion.save();
    return newQuestion;
}

const getAllQuestions = async (filter) => {
    const questions = await Question.find(filter);
    return questions;
}

const getQuestionById = async (id) => {
    const question = await Question.findById(id);
    return question;
}

const updateQuestion = async (question, id) => {
    try {
        await Question.findOneAndUpdate({ _id: id }, question);
        return true;
    } catch (ex) {
        return false;
    }
}

const deleteQuestion = async (id) => {
    try {
        const deletedQuestion = await Question.findOneAndDelete({ _id: id });
        if (!deletedQuestion) return false;
        return deletedQuestion;
    } catch (error) {
        return false;
    }

}
module.exports = {
    createNewQuestion,
    getQuestionById,
    updateQuestion,
    getAllQuestions,
    deleteQuestion
}

