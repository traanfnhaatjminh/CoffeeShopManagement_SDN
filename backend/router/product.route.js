const express = require("express");
const bodyParser = require("body-parser");
const Product = require("../model/Product");

const { createNewProduct, getAllProduct, getProductsByCategory } = require("../controllers/models/product-controller");

const productRouter = express.Router();
productRouter.use(bodyParser.json());



productRouter.post("/createProduct", createNewProduct);

productRouter.get("/list", getAllProduct);

productRouter.get("/getByCategory/:categoryId", getProductsByCategory);

module.exports = productRouter;

