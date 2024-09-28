import React from 'react';

export default function ImportProductModal({ closeModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-1/3 h-auto"> 
                <h2 className="text-xl font-bold mb-2">Import sản phẩm từ Excel</h2>

                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <label>Chọn file Excel</label>
                        <input type="file" className="border rounded-md p-2 w-full" />
                    </div>
                   
                </div>

                <div className="flex justify-end mt-3"> 
                    <button onClick={closeModal} className="bg-gray-400 text-white px-3 py-1 rounded-lg mr-2">
                        Hủy
                    </button>
                    <button type="submit" className="bg-green-400 text-white px-3 py-1 rounded-lg">
                        Import
                    </button>
                </div>
            </div>
        </div>
    );
}
