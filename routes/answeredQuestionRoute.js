const answeredQuestionController = require("../controllers/answeredQuestionController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const savedAnsweredQuestion = await answeredQuestionController.createNewAnsweredQuestion(req);
    if (!savedAnsweredQuestion) res.status(400).send("Operation failed");
    else res.status(200).send(savedAnsweredQuestion);
});


router.get('/', async (req, res) => {
    try {
        const answeredQuestions = await answeredQuestionController.getAllAnsweredQuestions(req);
        res.status(200).send(answeredQuestions);
    } catch (error) {
        res.status(400).send(error);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const answeredQuestion = await answeredQuestionController.getAnsweredQuestionById(req);
        if (!savedAnsweredQuestion) res.status(400).send("Operation failed");
        res.status(200).send(answeredQuestion);
    } catch (error) {
        res.status(400).send(error);
    }

});

module.exports = router;

    //Update and Delete functions. Irrelevant right now (9.2.22)

    // router.delete('/:id', async (req, res) =>{
    //    const deletedAnsweredQuestion = await answeredQuestionController.deleteAnsweredQuestion(req);
    //    res.status(200).send(deletedAnsweredQuestion);
    // });

    //
    // router.put('/:id', async (req, res) =>{
    //      const updatedAnsweredQuestion = await answeredQuestionController.updateAnsweredQuestion(req);
    //      if (!updatedAnsweredQuestion) res.status(400).send("Operation failed");
    //      else res.status(200).send(updatedAnsweredQuestion);
    // });

