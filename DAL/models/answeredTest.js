const {answeredQuestionSchema}= require("./answeredQuestion");
const mongoose = require('mongoose');
const answeredTestSchema = new mongoose.Schema({
    testId: {
        type: String,
        required: true
    },
    respondentId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    isUserPassed: {
        type: Boolean,
        required: true
    },
    finalGrade: {
        type: Number,
        min: 0,
        max: 100
    },
    numOfCorrectAnswers:{
        type:Number,
        min:0,
        required:true
    },
    answeredQuestions: [{
        questionId: String,
        answers:[String],
        isCorrect: Boolean
}],
});
const AnsweredTest = mongoose.model('AnsweredTest', answeredTestSchema);

exports.AnsweredTest = AnsweredTest;

