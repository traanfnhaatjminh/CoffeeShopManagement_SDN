const express = require("express");
const bodyParser = require("body-parser");
const Product = require("../model/Product");

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.post("/createProduct", async (req, res) => {
    try {
        const { pname, quantity, price, image, category_id, discount, status } = req.body;
        const newProduct = new Product({ pname, quantity, price, image, category_id, discount, status });
        
        const savedProduct = await newProduct.save();
        res.status(201).json({
            message: "Insert successfully.",
            result: savedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error creating product.",
            error: error.message
        });
    }
});

module.exports = productRouter;