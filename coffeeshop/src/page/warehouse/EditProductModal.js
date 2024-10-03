import React, { useState } from 'react';

export default function EditProductModal({ product, closeModal }) {
  const [formData, setFormData] = useState({
    productName: product?.productName || '',
    des: product?.des || '',
    unit: product?.unit || '',
    quantity: product?.quantity || '',
    price: product?.price || '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-1/3 h-auto">
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
              <label>Mô tả</label>
              <textarea
                type="text"
                name="des"
                value={formData.des}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                rows="2"
              ></textarea>
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
              <input type="file" name="image" onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label>Danh sách danh mục</label>
              <select
                name="category"
                value={formData.category || ''}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Chọn danh mục</option>
                <option value="coffee">Cà phê</option>
                <option value="highlight_coffee">Cà phê Highlight</option>
                <option value="tea">Trà Hitea</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button onClick={closeModal} className="bg-gray-400 text-white px-3 py-1 rounded-lg mr-2">
              Hủy
            </button>
            <button type="submit" className="bg-green-400 text-white px-3 py-1 rounded-lg">
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
