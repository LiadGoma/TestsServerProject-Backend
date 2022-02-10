const answeredTestController= require("../controllers/answeredTestController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const savedAnsweredTest = await answeredTestController.createNewAnsweredTest(req);
    if (!savedAnsweredTest) res.status(400).send("Operation failed");
    else res.status(200).send(savedAnsweredTest);
});

router.put('/:id', async (req, res) =>{
    const updatedAnsweredTest = await answeredTestController.updateAnsweredTest(req);
    if (!updatedAnsweredTest) res.status(400).send("Operation failed");
    else res.status(200).send(updatedAnsweredTest);
 });
 
 router.get('/', async (req, res) => {
    const answeredTests = await answeredTestController.getAllAnsweredTests();
    res.status(200).send(answeredTests);
 });

 router.get('/:id', async (req, res) =>{
    const answeredTest = await answeredTestController.getAnsweredTestById(req);
    res.status(200).send(answeredTest);
 });

 router.get('/:field', async (req, res) =>{
    const answeredTest = await answeredTestController.getAnsweredTestByField(req);
    res.status(200).send(answeredTest);
 })
module.exports = router;


 

 
 
