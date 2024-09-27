import React, { useState } from 'react';

export default function UserManagement({ showModal, setShowModal, setShowEditModal, setCurrentUser }) {
  const users = [
    {
      fullname: 'Minh Nhat',
      email: 'minh12a2nvc@gmail.com',
      username: 'minh05',
      role: 'Shop owner (Admin)',
      status: 'Active',
    },
  ];

  const roles = [
    { id: 1, name: 'Cashier' },
    { id: 2, name: 'Warehouse' },
    { id: 3, name: 'Barista' },
  ];

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  return (
    <div className='p-4'>
      <div className="items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(true)}>
          Add User
        </button>
      </div>

      {/* Filter Section */}
      <div className="mt-4 items-center space-x-4">
        <div>
          <label>Số người dùng trên mỗi trang:</label>
          <select className="border rounded-md ml-2 p-1">
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
        </div>
        <div>
          <input className="border rounded-md p-2 w-64" placeholder="Search users..." />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>
        <div>
          <select className="border rounded-md p-2">
            <option key={0} value={'all'}>
              All
            </option>
            {roles.map((role) => (
              <option key={role.id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Filter</button>
        </div>
      </div>

      {/* User Table */}
      <table className="min-w-full bg-white border mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Fullname</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.fullname}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => handleEdit(user)}>
                  Edit
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
