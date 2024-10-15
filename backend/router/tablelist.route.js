const express = require("express");
const bodyParser = require("body-parser");
const TableList = require("../model/TableList");
const { createNewTable, getAllTable } = require("../controllers/models/table-controller");

const tableRouter = express.Router();
tableRouter.use(bodyParser.json());

tableRouter.post("/createTable", createNewTable);

tableRouter.get("/list", getAllTable);

module.exports = tableRouter;