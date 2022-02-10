const {answeredQuestionSchema}= require("./answeredQuestion");
const mongoose = require('mongoose');
const answeredTestSchema = new mongoose.Schema({
    testId: {
        type: String,
        required: true
    },
    userId: {
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
    
    answeredQuestions: [answeredQuestionSchema]
});
const AnsweredTest = mongoose.model('AnsweredTest', answeredTestSchema);

exports.AnsweredTest = AnsweredTest;

