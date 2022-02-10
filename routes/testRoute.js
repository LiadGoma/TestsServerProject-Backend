const testController = require("../controllers/testController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
   const savedTest = await testController.createNewTest(req);
   if (!savedTest) res.status(400).send("Operation failed")
   else res.status(200).send(savedTest);
});

router.put('/:id', async (req, res) => {
   try {
      const updatedTest = await testController.updateTest(req);
      if (!updatedTest) res.status(400).send("Operation failed");
      else res.status(200).send(updatedTest);
   } catch (error) {
      res.status(400).send(error.message)
   }

});

router.get('/', async (req, res) => {
   try {
      const tests = await testController.getAllTests();
      res.status(200).send(tests);
   } catch (error) {
      res.status(400).send(error.message);
   }

});

router.get('/:id', async (req, res) => {
   try {
      const test = await testController.getTestById(req);
      res.status(200).send(test);
   } catch (error) {
      res.status(400).send(error.message);
   }

});

//not working

router.get('/:field', async (req, res) => {
   try {
      const test = await testController.getTestByField(req);
      res.status(200).send(test);
   } catch (error) {
      res.status(400).send(error.message);
   }

});

module.exports = router;
