const express = require("express");
const bodyParser = require("body-parser");
const Category = require("../model/Category");
const { CategoryRouter } = require(".");

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

//Create a new category
categoryRouter.post("/create", async (req, res, next) => {
    try {
        // Extract data from req.body
        const { cid, group_name, category_name } = req.body;

        //Lấy dữ liệu từ request từ client
        const newCategory = new Category({ cid, group_name, category_name });
        await newCategory.save().then(newDoc => {
            res.status(201).json({
                message: "Insert successfully.",
                result: newDoc
            })
        })
    } catch (error) {
        next(error);
    }
})

module.exports = categoryRouter;