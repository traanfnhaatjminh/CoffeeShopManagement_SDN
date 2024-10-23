import React, { useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import { IoSearch } from 'react-icons/io5';
import data from '../../data/database.json';

export default function TableList() {
  const [selectedTable, setSelectedTable] = useState(null); // State để lưu bàn được chọn
  const [paymentMethod, setPaymentMethod] = useState(''); // State để lưu phương thức thanh toán

  const tables = data.tablelist.map((table) => ({
    tableID: table.table_id,
    numberOfChair: table.number_of_chair,
    status: table.status,
    bill: [
      { item: 'Trà Sữa', price: 30000, quantity: 2 },
      { item: 'Cà Phê', price: 40000, quantity: 1 },
    ],
  }));

  // Hàm xử lý khi chọn bàn
  const handleTableClick = (table) => {
    if (table.status === 1) {
      setSelectedTable(table);
      setPaymentMethod(''); // Reset phương thức thanh toán khi chọn bàn mới
    } else {
      setSelectedTable(null); // Nếu bàn trống, không hiển thị hóa đơn
    }
  };
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      {/* Main content */}
      <main className="flex flex-1">
        <Sidebar />

        {/* Menu and Cart */}
        <div className="flex space-x-6 p-4 w-full">
          {/* Menu Section */}
          <section className="flex-1">
            <div className="flex">
              <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
                Danh sách bàn
              </h1>
              <div className="relative flex flex-1 justify-end">
                <input
                  type="text"
                  placeholder="Tìm bàn..."
                  className="relative w-2/3 bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <IoSearch />
                </span>
              </div>
            </div>

            {/* Table List */}
            <div className="grid grid-cols-5 gap-4 p-4">
              {tables.map((table) => (
                <div
                  key={table.tableID}
                  onClick={() => handleTableClick(table)} // Add click event for table selection
                  className={`bg-white rounded-lg shadow p-4 h-40 w-32 flex flex-col items-center justify-center cursor-pointer ${
                    table.status === 0 ? 'bg-red-100' : 'bg-green-100'
                  }`}
                >
                  <h3 className="text-center font-bold text-xl">Bàn {table.tableID}</h3>
                  <p className="text-sm">Số ghế: {table.numberOfChair}</p>
                  <p className={`text-xs font-semibold ${table.status === 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {table.status === 0 ? 'Đang trống' : 'Đang có khách'}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Cart Section */}
          <section className="w-1/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Hóa đơn thanh toán</h2>

            {selectedTable ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">Hóa đơn bàn {selectedTable.tableID}</h3>
                <table className="w-full text-left mb-6">
                  <thead>
                    <tr>
                      <th className="border-b py-2">Sản phẩm</th>
                      <th className="border-b py-2">Giá</th>
                      <th className="border-b py-2">Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTable.bill.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2">{item.item}</td>
                        <td className="py-2">{item.price.toLocaleString()} VND</td>
                        <td className="py-2">{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Tổng tiền:</span>
                  <span className="text-lg font-semibold">
                    {selectedTable.bill.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}{' '}
                    VND
                  </span>
                </div>

                {/* Chọn phương thức thanh toán */}
                <div className="mb-4 ">
                  <h4 className="font-semibold mb-2 ">Chọn phương thức thanh toán:</h4>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cash"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="flex-1  py-2 px-1  rounded"
                    />
                    Thanh toán tiền mặt
                    <input
                      type="checkbox"
                      id="transfer"
                      value="transfer"
                      checked={paymentMethod === 'transfer'}
                      onChange={handleChange}
                      className="flex-1  py-2 px-4  rounded "
                    />
                    Thanh toán chuyển khoản
                  </div>
                </div>

                {/* Thông báo phương thức thanh toán đã chọn */}
                {paymentMethod && (
                  <div className="mb-4">
                    <p className="text-center font-semibold">
                      Bạn đã chọn phương thức thanh toán:{' '}
                      <span className="text-blue-600">{paymentMethod === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'}</span>
                    </p>
                  </div>
                )}

                <button className="w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-orange-400 font-bold">
                  Xác nhận thanh toán
                </button>
              </div>
            ) : (
              <p className="text-center">Chưa có bàn thanh toán</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
