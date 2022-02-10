const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const container = require("./DI/containerConfig");
const config = container.resolve("config");

const questionRouter = require("./routes/questionsRoute");
const answeredQuestionRouter = require("./routes/answeredQuestionRoute");
const answeredTestRouter = require("./routes/answeredTestRoute");
const respondentRouter = require("./routes/respondentRoute");
const testRouter = require("./routes/testRoute");


const port = config.get("ports.serverPort") || 3001;
const mongoDbConnectionString = config.get("db.connectionString");


app.use(cors());
app.use(bodyParser.json());


app.use("/api/questions", questionRouter);
app.use("/api/answeredQuestions", answeredQuestionRouter);
app.use("/api/tests", testRouter);
app.use("/api/answeredTests", answeredTestRouter);
app.use("/api/respondents", respondentRouter);


mongoose.connect(mongoDbConnectionString)
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));


app.listen(port, () =>
  console.log(
    `YahalomTests server is running at ${port}`
  )
);


