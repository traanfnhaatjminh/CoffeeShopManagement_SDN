import React, { useState } from 'react';

export default function AddUserModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Tạo người dùng mới</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Tên đầy đủ</label>
            <input type="text" className="border rounded-md p-2 w-full" required />
          </div>
          <div>
            <label>Ngày/Tháng/Năm Sinh</label>
            <input type="date" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Số điện thoại</label>
            <input type="tel" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Địa chỉ</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Tên người dùng</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Mật khẩu</label>
            <input type="password" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Lặp lại mật khẩu</label>
            <input type="password" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label>Vai trò</label>
            <select className="border rounded-md p-2 w-full">
              <option value="cashier">Thu ngân</option>
              <option value="warehouse">Nhân viên kho</option>
              <option value="barista">Pha chế</option>
            </select>
          </div>
          <div>
            <label>Trạng thái</label>
            <select className="border rounded-md p-2 w-full">
              <option value="1">Đang hoạt động</option>
              <option value="0">Không hoạt động</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
            Hủy
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Tạo 
          </button>
        </div>
      </div>
    </div>
  );
}
