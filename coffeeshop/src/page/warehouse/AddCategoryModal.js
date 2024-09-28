import React from 'react';

export default function AddProductModal({ closeModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-1/3 h-auto"> 
                <h2 className="text-xl font-bold mb-2">Thêm danh mục mới</h2>

                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <label>Tên nhóm</label>
                        <input type="text" className="border rounded-md p-2 w-full" required />
                    </div>
                    <div>
                        <label>Tên danh mục</label>
                        <input type="text" className="border rounded-md p-2 w-full" required />
                    </div>
                    <div>
                        <label>Mô tả</label>
                        <textarea className="border rounded-md p-2 w-full" rows="2"></textarea>
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
            </div>
        </div>
    );
}
