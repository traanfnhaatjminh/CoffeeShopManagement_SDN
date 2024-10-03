const Product = require("./model/products");
const mongoose = require("mongoose");

const connect = mongoose.connect('mongodb://localhost:27017/categories')

connect.then((db) => {
    const newProduct = new Product({
        name: "tra da",
        description: "15k"
    });
    newProduct.save();
}).catch(error);