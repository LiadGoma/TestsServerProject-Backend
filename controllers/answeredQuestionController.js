const answeredQuestionRepository = require("../DAL/repositories/answeredQuestionRepository");
const extractReqBody = require("../services/extractReqBody");

const createNewAnsweredQuestion = async (req) => {
    const newAnsweredQuestion = extractReqBody.extractAnsweredQuestionBody(req);
    const answeredQuestionSaved = await answeredQuestionRepository.createNewAnsweredQuestion(newAnsweredQuestion);
    return answeredQuestionSaved;
}

const getAnsweredQuestionById = async (req) => {
    const id = req.params.id;
    const answeredQuestion = await answeredQuestionRepository.getAnsweredQuestionById(id);
    return answeredQuestion;
}

const getAllAnsweredQuestions = async () => {
    const answeredQuestions = await answeredQuestionRepository.getAllAnsweredQuestions();
    return answeredQuestions;
}

//const deleteAnsweredQuestion = async (req) =>{
//    const id = req.body.id;
//    const deletedAnsweredQuestion = await answeredQuestionRepository.deleteAnsweredQuestion(id);
//    return deletedAnsweredQuestion;
//}

module.exports = {
    createNewAnsweredQuestion,
    //getAnsweredQuestionByField,
    getAnsweredQuestionById,
    getAllAnsweredQuestions,
    //updateAnsweredQuestion,
    //deleteAnsweredQuestion
}