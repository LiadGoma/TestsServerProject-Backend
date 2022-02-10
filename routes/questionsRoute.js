const questionController = require("../controllers/questionController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const savedQuestion = await questionController.createNewQuestion(req);
    if (!savedQuestion) res.status(400).send("Operation failed");
    else res.status(200).send(savedQuestion);
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedQuestion = await questionController.deleteQuestion(req);
        if (!deletedQuestion) res.status(400).send("couldnt delete the question");
        res.status(200).send(deletedQuestion);
    } catch (error) {
        res.status(400).send(error);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updatedQuestion = await questionController.updateQuestion(req);
        if (!updatedQuestion) res.status(400).send("Operation failed");
        res.status(200).send(updatedQuestion);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const questions = await questionController.getAllQuestions();
        res.status(200).send(questions);
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const question = await questionController.getQuestionById(req);
        if (!question) res.status(400).send("couldnt get the requested question");
        res.status(200).send(question);
    } catch (error) {
        res.status(400).send(error.message);

    }
});


//not working
router.get('/:field', async (req, res) => {
    try {
        const question = await questionController.getQuestionByField(req);
        if (!question) res.status(400).send("couldnt get the requested question");
        res.status(200).send(question);
    } catch (error) {
        res.status(400).send(error);

    }

});

module.exports = router;