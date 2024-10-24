import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditProductModal({ category, closeModal, updateCategoryInState }) {
  const [formData, setFormData] = useState({
    group_name: '',
    category_name: '',
  });

  // Update form data when category prop changes
  useEffect(() => {
    if (category) {
      setFormData({
        group_name: category.group_name || '',
        category_name: category.category_name || '',
      });
    }
  }, [category]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/categories/${category._id}`, formData);
      console.log('Category updated:', response.data);
      updateCategoryInState(response.data); // Update parent component's state
      closeModal(); // Close modal after successful update
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/3 h-auto">
        <h2 className="text-xl font-bold mb-2">Chỉnh sửa danh mục</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <label>Tên nhóm</label>
              <input
                type="text"
                name="group_name"
                value={formData.group_name}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <label>Tên danh mục</label>
              <input
                type="text"
                name="category_name"
                value={formData.category_name}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
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
