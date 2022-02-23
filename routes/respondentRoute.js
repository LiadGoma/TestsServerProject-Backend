const respondentController = require("../controllers/respondentController");
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const savedRespondent = await respondentController.createNewRespondent(req);
        res.status(200).send(savedRespondent);
    } catch (error) {
        res.status(400).send(error.message);
    }

});
router.get('/', async (req, res) => {
    try {
        const respondents = await respondentController.getAllRespondents(req);
        res.status(200).send(respondents);
    } catch (error) {
        res.status(400).send(error.message);
    }

});
router.get('/:id', async (req, res) => {
    try {
        const respondent = await respondentController.getRespondentsById(req);
        res.status(200).send(respondent);
    } catch (error) {
        res.status(400).send(error.message);
    }

});
router.put('/:id', async (req, res) => {
    try {
       const updatedRespondent = await respondentController.updateRespondent(req);
       if (!updatedRespondent) res.status(400).send("Operation failed");
       else res.status(200).send(updatedRespondent);
    } catch (error) {
       res.status(400).send(error.message)
    }
 
 });

module.exports = router;