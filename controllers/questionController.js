const questionRepository=require("../DAL/repositories/questionRepository");

const createNewQuestion = async (req) =>{
    const newQuestion = {
        field: req.body.field,
        isMultichoice: req.body.isMultichoice,
        questionContent: req.body.questionContent,
        extraContent: req.body.extraContent,
        answers: req.body.answers,
        isHorizontal: req.body.isHorizontal,
        tags: req.body.tags
    }
    const questionSaved = await questionRepository.createNewQuestion(newQuestion);
    return questionSaved;
}

const getQuestionByField = async () =>{
    const field = req.body.field;
    const question = await questionRepository.getQuestionByField(field);
    return question;
}
    
const getQuestionById = async (req) =>{
    const id = req.body.id;
    const question = await questionRepository.getQuestionById(id);
    return question;
}
const updateQuestion = async (req) =>{
    const response = await questionRepository.updateQuestion(req.body.question, req.body.id);
    return response;
}

const getAllQuestions = async () =>{
    const questions = await questionRepository.getAllQuestions();
    return questions;
}

const deleteQuestion = async (req) =>{
    const id = req.body.id;
    const deletedQuestion = await questionRepository.deleteQuestion(id);
    return deletedQuestion;
}
 
module.exports={
    createNewQuestion,
    getQuestionByField,
    getQuestionById,
    updateQuestion,
    getAllQuestions,
    deleteQuestion
}

