const respondentRepository = require("../DAL/repositories/respondentRepository");
const container = require("../DI/containerConfig");
const extractReqBody = container.resolve("extractReqBodyService");

const createNewRespondent = async (req) => {
    const newRespondent = extractReqBody.extractRespondentBody(req);
    const respondentSaved = await respondentRepository.createNewRespondent(newRespondent);
    return respondentSaved;
}

const getAllRespondents = async ({query}) => {
    const respondents = await respondentRepository.getAllRespondents(query);
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