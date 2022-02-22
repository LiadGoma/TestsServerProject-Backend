const { Test } = require("../models/test");

const getAllTest = async (filter) => {
    const tests = await Test.find(filter);
    return tests;
}
const createNewTest = async (test) => {
    newTest = new Test({
        ...test
    });
    await newTest.save();
    return newTest;
}

const getTestById = async (id) => {
    const test = await Test.findById(id);
    return test;
}

const updateTest = async (id, updatedTest) => {
    try {
        console.log("in try");
        await Test.findOneAndUpdate({ _id: id }, updatedTest);
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}
module.exports = {
    getAllTest,
    createNewTest,
    getTestById,
    updateTest
}