// const mongoose = require("mongoose");
// const Product = require("./model/Category");

// // Kết nối đến MongoDB
// mongoose.connect('mongodb://localhost:27017/categories')
//   .then(async () => {
//     console.log("Kết nối thành công!");

//     // Tạo sản phẩm mới
//     const newProduct = new Product({
//       name: "tra da",
//       description: "15k"
//     });

//     // Lưu sản phẩm vào collection "products"
//     await newProduct.save();
//     console.log("Sản phẩm đã được lưu:", newProduct);
//   })
//   .catch(error => {
//     console.log("Lỗi kết nối:", error);
//   });
