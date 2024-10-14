const express = require("express");
const bodyParser = require("body-parser");
const TableList = require("../model/TableList");

const tableRouter = express.Router();
tableRouter.use(bodyParser.json());

tableRouter.post("/createTable", async (req, res) => {
    try {
        const { number_of_chair, status } = req.body;
        const newTable = new TableList({ number_of_chair, status });

        await newTable.save().then(newDoc => {
            res.status(201).json({
                message: "Insert successfully.",
                result: newDoc
            })
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error creating product.",
            error: error.message
        });
    }
});

tableRouter.get("/list", async (req, res, next) => {
    try {
        const tables = await TableList.find(); // Fetch all categories from the DB
        res.status(200).json(tables);
    } catch (error) {
        next(error);
    }
});

module.exports = tableRouter;