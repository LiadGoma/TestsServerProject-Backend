
const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    field:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    isMultichoice:{
        type: Boolean,
        required: true 
    },
    questionContent:{
        type: String,
        required: true,
        minlength: 0,
        maxlength: 1024
    },
    extraContent:{
        type: String,
        required: false
    },
    answers: [{
            answerId: String,
            content:String,
            isCorrect: Boolean
    }],
    isHorizontal: {
        type: Boolean,
        required: true
    },
    tags: [String],
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const Question = mongoose.model('Question', questionSchema);

module.exports={
    questionSchema,
    Question
}

