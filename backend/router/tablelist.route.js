const express = require("express");
const bodyParser = require("body-parser");
const TableList = require("../model/TableList");

const tableRouter = express.Router();
tableRouter.use(bodyParser.json());

// POST /api/tableList/createTable
tableRouter.post("/createTable", async (req, res) => {
    try {
        const tables = req.body; // Mong đợi một mảng các đối tượng bàn
        const savedTables = [];

        // Lặp qua từng đối tượng bàn trong mảng
        for (const table of tables) {
            const { number_name, status } = table;
            const tableList = new TableList({ number_name, status });
            const savedTable = await tableList.save();
            savedTables.push(savedTable); // Lưu các bàn đã lưu
        }

        res.status(201).json({
            message: "Tạo bàn thành công",
            results: savedTables
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Lỗi khi tạo bàn.",
            error: error.message
        });
    }
});
tableRouter.get("/", async(req, res, next)=>{
    try {
        const  tableList = await TableList.find();
        res.status(200).json(tableList);

    } catch (error) {
        next(error)
    }
})

module.exports = tableRouter;
