const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const httpErrors = require("http-errors");
const db = require("./model/index");
const CategoryRouter = require("./router/category.route");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/", async (req, res, next) => {
  res.status(500).json({ message: "Welcome to Group 5" })
})

app.use("/category", CategoryRouter);

app.use("/", async (req, res, next) => {
  next(httpErrors.BadRequest("Bad Request"));
});

app.use("/", async (req, res, next) => {
  res.status = err.status || 500;
  res.send({
    "error": {
      "status": err.status || 500,
      "message": err.message
    }
  })
});

const HOST = process.env.HOSTNAME;
const POST = process.env.POST;

app.listen(POST, HOST, () => {
  console.log('server is running');
  db.connectDB();
})