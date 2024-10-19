const express = require("express");
const bodyParser = require("body-parser");
const Category = require("../model/Category");

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

//Create a new category
categoryRouter.post("/createCategory", async (req, res, next) => {
    try {
        // Extract data from req.body
        const {  group_name, category_name } = req.body;

        //Lấy dữ liệu từ request từ client
        const newCategory = new Category({  group_name, category_name });
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

// Get all categories
categoryRouter.get("/", async (req, res, next) => {
    try {
        const categories = await Category.find(); // Fetch all categories from the DB
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
});

module.exports = categoryRouter;