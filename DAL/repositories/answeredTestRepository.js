const { AnsweredTest } = require("../models/answeredTest");

const createNewAnsweredTest = async (test) => {
    newAnsweredTest = new AnsweredTest({
        ...test
    });
    newAnsweredTest.save();
    return newAnsweredTest;
}


const getAnsweredTestById = async (id) => {
    const answeredTest = await AnsweredTest.findById(id);
    return answeredTest;
}

const getAllAnsweredTests = async (filter) => {
    return await AnsweredTest.find(filter);

}


module.exports = {
createNewAnsweredTest,
getAllAnsweredTests,
getAnsweredTestById
}