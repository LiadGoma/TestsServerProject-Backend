const respondentRepository = require("../DAL/repositories/respondentRepository");

const createNewRespondent = async (req) => {
    const newRespondent = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    };
    const respondentSaved = await respondentRepository.createNewRespondent(newRespondent);
    return respondentSaved;
}

const getAllRespondents = async () => {
    const respondents = await respondentRepository.getAllRespondents();
    return respondents;
}
const getRespondentsById = async (req) => {
    const respondent = respondentRepository.getById(req.body.id);
    return respondent;
}


module.exports = {
    createNewRespondent,
    getAllRespondents,
    getRespondentsById
}