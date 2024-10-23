const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // Import Multer để upload file
const Product = require("../model/Product");
const { createNewProduct, getAllProductInWarehouse, getAllProductInHome, getProductsByCategory, updateProduct, deleteProduct } = require("../controllers/models/product-controller");

const productRouter = express.Router();
productRouter.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Đường dẫn tới thư mục lưu file upload
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Tạo tên file mới không bị trùng
    }
});

const upload = multer({ storage: storage });

productRouter.post("/createProduct", upload.single("image"), createNewProduct);

productRouter.get("/listInWarehouse", getAllProductInWarehouse);

productRouter.get("/listInHome", getAllProductInHome);

productRouter.get("/getByCategory/:categoryId", getProductsByCategory);

productRouter.put("/updateProduct/:productId", upload.single("image"), updateProduct);

productRouter.delete("/deleteProduct/:productId", deleteProduct);
module.exports = productRouter;