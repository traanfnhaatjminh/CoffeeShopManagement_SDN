const express = require("express");
const bodyParser = require("body-parser");
const { createNewBill } = require("../controllers/models/bill-controller");

const billRouter = express.Router();
billRouter.use(bodyParser.json());

billRouter.post("/createBill", createNewBill);

module.exports = billRouter;