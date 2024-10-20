import React, { useState, useEffect } from 'react';
import data from '../../data/database.json';

export default function EditProductModal({ product, closeModal }) {
  const [formData, setFormData] = useState({
    productName: '',
    des: '',
    unit: '',
    quantity: '',
    price: '',
    image: null,
    category: '',
  });

  const [categories, setCategories] = useState([]);

  // Load the product data into form fields when modal opens
  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.pname || '',
        des: product.description || '',
        unit: product.unit || '',
        quantity: product.quantity || '',
        price: product.price || '',
        image: product.image || '',
        category: product.category_id || '',
      });
    }

    // Load categories from JSON file (categoriesData is already imported)
    setCategories(data.categories);
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Storing the selected image file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/3 h-auto" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 className="text-xl font-bold mb-2">Chỉnh sửa sản phẩm</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <label>Tên sản phẩm</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <label>Định lượng</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label>Số lượng</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label>Giá</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label>Hình ảnh</label>
              <input type="file" name="image" onChange={handleImageChange} className="border rounded-md p-2 w-full" />
              {formData.image && typeof formData.image === 'string' && (
                <img src={formData.image} alt="Product" className="mt-2 w-16 h-16 object-cover rounded-lg" />
              )}
            </div>
            <div>
              <label>Danh sách danh mục</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Chọn danh mục</option>
                {categories.map((cat) => (
                  <option key={cat.cid} value={cat.cid}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button onClick={closeModal} className="bg-gray-400 text-white px-3 py-1 rounded-lg mr-2">
              Hủy
            </button>
            <button type="submit" className="bg-green-400 text-white px-3 py-1 rounded-lg">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
