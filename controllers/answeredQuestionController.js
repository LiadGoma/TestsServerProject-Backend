const answeredQuestionRepository = require("../DAL/repositories/answeredQuestionRepository");
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

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

const getAllAnsweredQuestions = async ({query}) => {
    const answeredQuestions = await answeredQuestionRepository.getAllAnsweredQuestions(query);
    return answeredQuestions;
}

const deleteAnsweredQuestion = async (req) =>{
   const id = req.body.id;
   const deletedAnsweredQuestion = await answeredQuestionRepository.deleteAnsweredQuestion(id);
   return deletedAnsweredQuestion;
}

module.exports = {
    createNewAnsweredQuestion,
    getAnsweredQuestionById,
    getAllAnsweredQuestions,
    deleteAnsweredQuestion
}
