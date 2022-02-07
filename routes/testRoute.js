const testController= require("../controllers/testController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
   testController.createNewTest();
});
router.get('/', async (req, res) => {
   testController.getAllTests();
});


module.exports = router;