const answeredTestController = require("../controllers/answeredTestController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const savedAnsweredTest = await answeredTestController.createNewAnsweredTest(req);
    if (!savedAnsweredTest) res.status(400).send("Operation failed");
    else res.status(200).send(savedAnsweredTest);
});

router.get('/', async (req, res) => {
    try {
        const answeredTests = await answeredTestController.getAllAnsweredTests(req);
        res.status(200).send(answeredTests);
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const answeredTest = await answeredTestController.getAnsweredTestById(req);
        if (!answeredTest) res.status(400).send("couldnt get the requested answered question");
        res.status(200).send(answeredTest);
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.put('/:id', async (req, res) =>{
    const updatedAnsweredTest = await answeredTestController.updateAnsweredTest(req);
    if (!updatedAnsweredTest) res.status(400).send("Operation failed");
    else res.status(200).send(updatedAnsweredTest);
 });

module.exports = router;






