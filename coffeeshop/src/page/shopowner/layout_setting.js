import React, { useState } from 'react';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import UserManagement from './UserManagement';

function LayoutSetting() {
  // State để quản lý hiển thị modaljkashjkadh
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Header />
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

export default LayoutSetting;
