
const mongoose = require('mongoose');
const answeredTestSchema = new mongoose.Schema({
   
});
const AnsweredTest = mongoose.model('AnsweredTest', answeredTestSchema);

exports.AnsweredTest = AnsweredTest;

