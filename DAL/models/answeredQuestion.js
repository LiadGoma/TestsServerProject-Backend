
const mongoose = require('mongoose');

const answeredQuestionSchema = new mongoose.Schema({
    questionId:{
        type: String,
        required: true,
    },
    answers:[String],
    isCorrect:{
        type: Boolean,
        required: true
    }
});
const AnsweredQuestion = mongoose.model('AnsweredQuesiton', answeredQuestionSchema);

module.exports={
    AnsweredQuestion,
    answeredQuestionSchema
}

