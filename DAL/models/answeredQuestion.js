
const mongoose = require('mongoose');
const answeredQuestionSchema = new mongoose.Schema({
   
});
const AnsweredQuestion = mongoose.model('AnsweredQuesiton', answeredQuestionSchema);

exports.AnsweredQuestion = AnsweredQuestion;

