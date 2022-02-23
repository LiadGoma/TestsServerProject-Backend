const { Respondent } = require("../models/respondent");


const createNewRespondent = async (respondent) => {
    let currentRespondent = await Respondent.findOne({ email: respondent.email });
    if (currentRespondent) return currentRespondent;

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
    return respondent;
}

const getAllRespondents = async (filter) => {
    const respondents = await Respondent.find(filter);
    return respondents;
}
const updateRespondent = async (id, updatedRespondent) => {
    try {
        await Respondent.findOneAndUpdate({ _id: id }, updatedRespondent);
        return true;
    } catch (error) {
        return false;
    }
}



module.exports = {
    createNewRespondent,
    getById,
    getAllRespondents,
    updateRespondent
}