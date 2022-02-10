const testController= require("../controllers/testController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
   const savedTest = await testController.createNewTest(req);
   if (!savedTest) res.status(400).send("Operation failed")
   else res.status(200).send(savedTest);
});

router.put('/:id', async (req, res) =>{
   const updatedTest = await testController.updateTest(req);
   if (!updatedTest) res.status(400).send("Operation failed");
   else res.status(200).send(savedTest);
});

router.get('/', async (req, res) => {
   const tests = await testController.getAllTests();
   res.status(200).send(tests);
});

router.get('/:id', async (req, res) =>{
   const test = await testController.getTestById(req);
   res.status(200).send(test);
});

router.get('/:field', async (req, res) =>{
   const test = await testController.getTestByField(req);
   res.status(200).send(test);
});

module.exports = router;
