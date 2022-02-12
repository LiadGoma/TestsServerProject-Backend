const respondentController = require("../controllers/respondentController");
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const savedRespondent = await respondentController.createNewRespondent(req);
    if (!savedRespondent) res.status(400).send("Email already registered");
    else res.status(200).send(savedRespondent);
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

module.exports = router;