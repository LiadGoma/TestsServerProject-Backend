
const mongoose = require('mongoose');

const answeredQuestionSchema = new mongoose.Schema({
    questionId:{
        type: String,
        required: true,
    },
    answers:[{
        body: String,
    }],
    isCorrect:{
        type: Boolean,
        required: true
    }
});
const AnsweredQuestion = mongoose.model('AnsweredQuesiton', answeredQuestionSchema);

exports.AnsweredQuestion = AnsweredQuestion;
module.exports={
    answeredQuestionSchema
}

