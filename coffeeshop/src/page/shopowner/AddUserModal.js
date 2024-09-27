import React, { useState } from 'react';

export default function AddUserModal({ closeModal }) {
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
              <button type='submit' className="bg-green-500 text-white px-4 py-2 rounded-lg">Add User</button>
            </div>
          </div>
        </div>
      );
    
}
