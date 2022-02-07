const testRepository=require("../DAL/repositories/testRepository");

const getAllTests=()=>{
    return testRepository.getAllTest();
}
const createNewTest=()=>{
    testRepository.createNewTest();
}
 
module.exports={
    getAllTests,
    createNewTest
}