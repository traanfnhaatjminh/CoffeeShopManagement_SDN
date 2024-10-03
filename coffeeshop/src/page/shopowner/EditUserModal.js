import React, { useState } from 'react';

export default function EditUserModal({ user, closeModal }) {
  const [formData, setFormData] = useState({
    fullname: user?.fullname || '',
    email: user?.email || '',
    username: user?.username || '',
    role: user?.role || 'Customer',
    status: user?.status || 'Active',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu cập nhật ở đây, ví dụ gọi API
    console.log('Updated User:', formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Update User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
              disabled
            />
          </div>
          <div>
            <label>Role</label>
            <select name="role" value={formData.role} onChange={handleChange} className="border rounded-md p-2 w-full">
              <option value="Cashier">Cashier</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Barista">Barista</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
