const respondentRepository = require("../DAL/repositories/respondentRepository");
const extractReqBody = require("../services/extractReqBody");

const createNewRespondent = async (req) => {
    const newRespondent = extractReqBody.extractRespondentBody(req);
    const respondentSaved = await respondentRepository.createNewRespondent(newRespondent);
    return respondentSaved;
}

const getAllRespondents = async () => {
    const respondents = await respondentRepository.getAllRespondents();
    return respondents;
}
const getRespondentsById = async (req) => {
    const respondent = await respondentRepository.getById(req.params.id);
    return respondent;
}


module.exports = {
    createNewRespondent,
    getAllRespondents,
    getRespondentsById
}