const answeredTestRepository=require("../DAL/repositories/answeredTestRepository");

const getAllAnsweredTests = async () => {
    const answeredTests = await answeredTestRepository.getAllAnsweredTests();
    return answeredTests;
}

const createNewAnsweredTest = async (req) => {
    const newAnsweredTest = {
        testId: req.body.testId,
        userId: req.body.userId,
        date: req.body.date,
        isUserPassed: req.body.isUserPassed,
        finalGrade: req.body.finalGrade
    }

    const savedAnsweredTest = answeredTestRepository.createNewAnsweredTest(newAnsweredTest);
    return savedAnsweredTest;

}
const getAnsweredTestByField = async (req) => {
    const field = req.body.field;
    const answeredTest = await answeredTestRepository.getAnsweredTestByField(field);
    return answeredTest;
}
const getAnsweredTestById = async (req) => {
    const id = req.body.id;
    const answeredTest = await answeredTestRepository.getAnsweredTestById(id);
    return answeredTest;
}
const updateAnsweredTest = async (req) =>{ 
    const id = req.body.id;
    const newAnsweredTest= {
        testId: req.body.testId,
        userId: req.body.userId,
        date: req.body.date,
        isUserPassed: req.body.isUserPassed,
        finalGrade: req.body.finalGrade
    }
    const updatedAnsweredTest = await answeredTestRepository.updateAnsweredTest(id, newAnsweredTest);
    return updatedAnsweredTest;
}
 
module.exports={
    getAllAnsweredTests,
    createNewAnsweredTest,
    getAnsweredTestByField,
    getAnsweredTestById,
    updateAnsweredTest
}