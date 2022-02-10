const questionController= require("../controllers/questionController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
   const savedQuestion = await questionController.createNewQuestion(req);
   if (!savedQuestion) res.status(400).send("Operation failed");
   else res.status(200).send(savedQuestion);
});

router.delete('/:id', async (req, res) =>{
    const deletedQuestion = await questionController.deleteQuestion(req);
    res.status(200).send(deletedQuestion);
});

router.put('/:id', async (req, res) =>{
    const updatedQuestion = await questionController.updateQuestion(req);
    if (!updatedQuestion) res.status(400).send("Operation failed");
    else res.status(200).send(updatedQuestion);
});

router.get('/', async (req, res) => {
    const questions = await questionController.getAllQuestions();
    res.status(200).send(questions);
});

router.get('/:id', async (req, res) =>{
    const question = await questionController.getQuestionById(req);
    res.status(200).send(question);
});

router.get('/:field', async (req, res) =>{
    const question = await questionController.getQuestionByField(req);
    res.status(200).send(question);
});

module.exports = router;