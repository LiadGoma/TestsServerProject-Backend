const { questionSchema } = require("./question");
const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    field: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    testIntroduction: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    creatorEmail: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    passingGrade: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    canShowAnswers: {
        type: Boolean,
        required: true,
    },
    certificationURL: {
        type: String,
    },
    successText: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    failureText: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now


    },
    questions: [questionSchema]
});
const Test = mongoose.model('Test', testSchema);

exports.Test = Test;

