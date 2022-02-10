
const mongoose = require('mongoose');
const respondentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: false,
        minlength: 9,
        maxlength: 100
    },
    answeredTestsId: [String]
});
const Respondent = mongoose.model('Respondent', respondentSchema);

exports.Respondent = Respondent;

