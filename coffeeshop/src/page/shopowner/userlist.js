import React, { useState } from 'react';

function UserList() {
  // State để quản lý hiển thị modal
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <UserManagement
          showModal={showModal}
          setShowModal={setShowModal}
          setShowEditModal={setShowEditModal}
          setCurrentUser={setCurrentUser}
        />
      </div>

      {/* Modal để thêm người dùng */}
      {showModal && <AddUserModal closeModal={() => setShowModal(false)} />}
      {showEditModal && <EditUserModal user={currentUser} closeModal={() => setShowEditModal(false)} />}
    </div>
  );
}

// Sidebar Component
function Sidebar() {
  const menuItems = ['Home', 'Warehouse', 'Categories', 'Table List', 'All Bill', 'Job Board', 'Statistic', 'Setting'];

  return (
    <div className="w-64 bg-gray-200 p-4 space-y-4">
      {menuItems.map((item) => (
        <button key={item} className="w-full p-2 text-left bg-gray-300 hover:bg-gray-400 rounded-lg">
          {item}
        </button>
      ))}
    </div>
  );
}

// User Management Component
function UserManagement({ showModal, setShowModal, setShowEditModal, setCurrentUser }) {
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
    <div>
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

function EditUserModal({ user, closeModal }) {
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

// Modal Component
function AddUserModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Full Name</label>
            <input type="text" className="border rounded-md p-2 w-full" required />
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="date" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Username</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Role</label>
            <select className="border rounded-md p-2 w-full">
              <option value="cashier">Cashier</option>
              <option value="warehouse">Warehouse</option>
              <option value="barista">Barista</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select className="border rounded-md p-2 w-full">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
            Cancel
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserList;
