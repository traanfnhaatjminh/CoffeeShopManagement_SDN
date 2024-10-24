import React, { useState, useEffect } from 'react';
import { FaPen, FaTrash, FaPlus, FaFileImport } from 'react-icons/fa';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import axios from 'axios';
import EditCategoryModal from './EditCategoryModal';
import AddCategoryModal from './AddCategoryModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { IoSearch } from 'react-icons/io5';

function WarehouseCategory() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to fetch categories from the backend
  const fetchCategories = async (search = '') => {
    setLoading(true);
    try {
      const response = await axios.get('/categories/list');
      const filteredCategories = response.data.filter(category =>
        category.category_name.toLowerCase().includes(search.toLowerCase())
      );
      setCategories(filteredCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle Edit
  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  // Handle Add
  const handleAddCategory = () => {
    setShowAddModal(true);
  };

  // Update the category list after adding a new one
  const addCategoryToState = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setShowAddModal(false); // Close the modal after successful addition
    toast.success('Thêm danh mục thành công!');
  };

  // Update the category list after editing an existing one
  const updateCategoryInState = (updatedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      )
    );
    setShowEditModal(false); // Close the modal after successful edit
    toast.success('Cập nhật danh mục thành công!');
  };

  // Delete category
  const deleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`/categories/${categoryId}`);
      if (response.status === 200) {
        toast.success('Xóa danh mục thành công!');
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category._id !== categoryId)
        );
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Confirm Delete
  const confirmDeleteCategory = (categoryId) => {
    confirmAlert({
      title: 'Xác nhận xóa',
      message: 'Bạn có chắc chắn muốn xóa danh mục này?',
      buttons: [
        {
          label: 'Có',
          onClick: () => deleteCategory(categoryId),
        },
        {
          label: 'Không',
          onClick: () => toast.info('Hãy suy nghĩ thật kĩ nhé!'),
        },
      ],
    });
  };

  // Handle Search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchCategories(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
              Danh sách danh mục
            </h1>
          </div>

          <div className="flex mb-4 items-center space-x-2">
            <div className="relative w-1/3">
              <input
                className="bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 sm:text-sm w-full"
                type="text"
                placeholder="Tìm kiếm danh mục..."
                aria-label="Tìm kiếm danh mục"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  className="bg-transparent border-none cursor-pointer"
                  aria-label="Tìm kiếm"
                >
                  <IoSearch />
                </button>
              </span>
            </div>
            <button className="bg-green-300 text-white p-2 rounded-lg flex items-center"
              onClick={handleAddCategory}
            >
              <FaPlus className="mr-1" />
              Thêm
            </button>
            <button className="bg-teal-400 text-white p-2 rounded-lg flex items-center">
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
                    Tên Nhóm
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Tên Danh Mục
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Hành Động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 font-bold text-lg font-lauren italic text-gray-400">Đang tải dữ liệu...</td>
                  </tr>
                ) : categories.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 font-bold text-lg font-lauren italic text-gray-400">Không tìm thấy danh mục nào...</td>
                  </tr>
                ) : (
                  categories.map((category, index) => (
                    <tr key={category._id} className="border-b hover:bg-gray-100 transition-colors duration-300">
                      <td className="px-6 py-4 text-lg font-medium text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-md text-gray-500">{category.group_name}</td>
                      <td className="px-6 py-4 text-md text-gray-500">{category.category_name}</td>
                      <td className="px-6 py-4 text-md font-medium flex">
                        <button
                          className="bg-brown-500 text-white py-1 px-3 rounded-lg mr-2"
                          onClick={() => handleEditCategory(category)}
                        >
                          <FaPen className="inline-block" />
                        </button>
                        <button className="bg-brown-900 text-white py-1 px-3 rounded-lg"
                          onClick={() => confirmDeleteCategory(category._id)}
                        >
                          <FaTrash className="inline-block" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {showEditModal && (
              <EditCategoryModal
                category={selectedCategory}
                closeModal={() => setShowEditModal(false)}
                updateCategoryInState={updateCategoryInState} // Pass this to modal
              />
            )}
            {showAddModal && (
              <AddCategoryModal
                closeModal={() => setShowAddModal(false)}
                addCategoryToState={addCategoryToState} // Pass this to modal
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseCategory;
