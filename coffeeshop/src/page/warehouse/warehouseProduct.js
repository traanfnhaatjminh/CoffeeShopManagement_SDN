import React from 'react';
import { FaPen, FaTrash, FaPlus, FaFileImport } from 'react-icons/fa';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
function WarehouseProduct({ showModal, setShowModal, setShowImportModal, setShowEditModal, setProduct }) {
  const data = [
    {
      id: 1,
      productId: 1,
      productName: 'Trà Xanh Annabelle',
      des: 'Ngon số 1',
      unit: 'kg',
      quantity: 1,
      price: 49000,
      image: 'abc',
      categoryId: 1,
    },
    {
      id: 2,
      productId: 2,
      productName: 'Cà phê Ci Sáp',
      des: 'Ngon số 2',
      unit: 'gr',
      quantity: 2,
      price: 49000,
      image: 'abc',
      categoryId: 2,
    },
  ];

  const handleEdit = (product) => {
    setProduct(product);
    setShowEditModal(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
              Danh sách sản phẩm
            </h1>
          </div>

          <div className="flex mb-4 items-center space-x-2">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="border border-gray-300 p-2 rounded-lg w-1/3 sm:w-auto"
            />
            <button className="bg-brown-900 text-white p-2 rounded-lg">Tìm kiếm</button>
            <button
              className="bg-green-300 text-white p-2 rounded-lg flex items-center"
              onClick={() => setShowModal(true)}
            >
              <FaPlus className="mr-1" />
              Thêm
            </button>
            <button
              className="bg-teal-400 text-white p-2 rounded-lg flex items-center"
              onClick={() => setShowImportModal(true)}
            >
              <FaFileImport className="mr-1" />
              Import
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Tên Sản Phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Mô tả
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Đơn vị
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Số lượng
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Ảnh
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Hành Động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4 text-lg font-medium text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-md text-gray-500">{product.productName}</td>
                    <td className="px-6 py-4 text-md text-gray-500">{product.des}</td>
                    <td className="px-6 py-4 text-md text-gray-500">{product.unit}</td>
                    <td className="px-6 py-4 text-md text-gray-500">{product.quantity}</td>
                    <td className="px-6 py-4 text-md text-gray-500">{product.price}</td>
                    <td className="px-6 py-4 text-md text-gray-500">
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 text-md font-medium flex">
                      <button
                        className="bg-brown-500 text-white py-1 px-3 rounded-lg mr-2"
                        onClick={() => handleEdit(product)}
                      >
                        <FaPen className="inline-block" />
                      </button>
                      <button className="bg-brown-900 text-white py-1 px-3 rounded-lg">
                        <FaTrash className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseProduct;
