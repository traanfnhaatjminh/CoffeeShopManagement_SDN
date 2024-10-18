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

const getProductsByCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;

        console.log("Category ID from request:", categoryId);

        // Check if categoryId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: "Invalid category ID" });
        }

        // Query the products by category_id
        const products = await Product.find({ category_id: categoryId });
        console.log("Products found:", products);

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this category." });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error('Error in getProductsByCategory:', error);  // Log the error
        return res.status(500).json({ message: "An error occurred while fetching products." });
    }
};


module.exports = { createNewProduct, getAllProduct, getProductsByCategory };