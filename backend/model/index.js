const mongoose = require("mongoose");
const Category = require("../model/Category");
const { User } = require("./user");

//Khởi tạo đối tượng CSDL
const db = {};

//Bổ sung Entity object vào DB
db.Category = Category;
db.User = User;

//Kết nối CSDL
db.connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.MONGODB_URI)
            .then(() => console.log("Connect to MongoDB successfully."));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Use process.exit with a non-zero code for error handling
    }
};

module.exports = db;
