const respondentController = require("../controllers/respondentController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const savedRespondent = await respondentController.createNewRespondent(req);
    if (!savedRespondent) res.status(400).send("Email already registered");
    else res.status(200).send(savedRespondent);
});


module.exports = router;