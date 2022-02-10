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


module.exports = {
createNewAnsweredTest,
getAnsweredTestById
}