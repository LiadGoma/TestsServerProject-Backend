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

const getAllAnsweredQuestions = async () => {
    return await AnsweredQuestion.find();
}


module.exports = {
    createNewAnsweredQuestion,
    getAnsweredQuestionById,
    getAllAnsweredQuestions
}