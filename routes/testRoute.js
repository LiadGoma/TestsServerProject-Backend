const testController = require("../controllers/testController");
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
   try {
      const savedTest = await testController.createNewTest(req);
      res.status(200).send(savedTest);
   } catch (error) {
      console.log(error);
      res.status(400).send("Operation failed")
   }
});

router.get('/', async (req, res) => {
   try {
      const tests = await testController.getAllTests(req);
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

router.put('/:id', async (req, res) => {
   try {
      const updatedTest = await testController.updateTest(req);
      if (!updatedTest) res.status(400).send("Operation failed");
      else res.status(200).send(updatedTest);
   } catch (error) {
      res.status(400).send(error.message)
   }

});


module.exports = router;
