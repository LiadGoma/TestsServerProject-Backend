const { Respondent } = require("../models/respondent");


const createNewRespondent = async (respondent) => {
    let currentRespondent = await Respondent.findOne({ email: respondent.email });
    if (currentRespondent) return false;

    newRespondent = new Respondent({
        ...respondent
    });
    await newRespondent.save();
    return {
        id: newRespondent.id,
        email: newRespondent.email,
        name: newRespondent.name,
        phoneNumber: newRespondent.phoneNumber
    };

}

const getById = async (id) => {
    const respondent = await Respondent.findOne({ _id: id });
    console.log(respondent);
    return respondent;
}

const getAllRespondents = async () => {
    const respondents = await Respondent.find();
    return respondents;
}



module.exports = {
    createNewRespondent,
    getById,
    getAllRespondents
}