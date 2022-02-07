const { Test } = require("../models/test");
const getAllTest = () => {
    return await Test.find();
}
const createNewTest = () => {

}


module.exports = {
    getAllTest,
    createNewTest
}