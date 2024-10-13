const express = require("express");
const bodyParser = require("body-parser");
const Product = require("../model/Product")

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.post("/createProduct", async (req, res, next) => {
    try {
        const { pname, quantity, price, image, category_id, discount, status } = req.body;
        const newProduct = new Product({ pname, quantity, price, image, category_id, discount, status });
        await newProduct.save().then(newDoc => {
            res.status(201).json({
                message: "Insert successfully.",
                result: newDoc
            })
        })
    } catch (error) {
        console.error(error); // Log lỗi để kiểm tra
        res.status(400).json({
            message: "Error creating product.",
            error: error.message // Gửi thông điệp lỗi chi tiết
        });
    }
})