const { AnsweredQuestion } = require("../models/answeredQuestion");

const createNewAnsweredQuestion = async (answeredQuestion) => {
    const newAnsweredQuestion = new AnsweredQuestion({
        ...answeredQuestion
    })
    await newAnsweredQuestion.save();
    return newAnsweredQuestion;
}

const getAnsweredQuestionById = async (id) => {
    const answeredQuestion = await AnsweredQuestion.findById(id);
    return answeredQuestion;
}

const getAllAnsweredQuestions = async (filter) => {
    return await AnsweredQuestion.find(filter);
}


module.exports = {
    createNewAnsweredQuestion,
    getAnsweredQuestionById,
    getAllAnsweredQuestions
}