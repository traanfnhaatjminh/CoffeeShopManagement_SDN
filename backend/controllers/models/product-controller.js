const Product = require("../../model/Product");
const mongoose = require("mongoose");

const createNewProduct = async (req, res) => {
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
};

const getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find(); // Fetch all categories from the DB
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category_id: mongoose.Types.ObjectId(categoryId) }); // Fetch all categories from the DB
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = { createNewProduct, getAllProduct, getProductsByCategory };