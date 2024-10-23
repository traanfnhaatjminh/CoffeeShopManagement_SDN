import React from 'react';

const data = [
  { id: 1, table: "bàn 103", item: "Cà phê đen", quantity: 1, time: "8:27", status: "processing", returned: true },
  { id: 2, table: "bàn 103", item: "Cà phê đá xay", quantity: 1, time: "8:27", status: "processing", returned: true },
  { id: 3, table: "bàn 103", item: "Kem Chanh Dâu", quantity: 2, time: "8:27", status: "processing", returned: false },
  { id: 4, table: "bàn 103", item: "Trà Ô Long Kem Sữa", quantity: 4, time: "8:27", status: "processing", returned: false },
  { id: 5, table: "bàn 103", item: "Trà Đen Kem Sữa", quantity: 2, time: "8:27", status: "processing", returned: false },
  { id: 6, table: "bàn 103", item: "Trà Xanh Kem Sữa", quantity: 2, time: "8:27", status: "processing", returned: false },
];

function ProductList() {
  return (
    <div className="max-w-6xl mx-auto py-5">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg ml-2">
          Tìm kiếm
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Bàn</th>
              <th className="p-3">Tên món</th>
              <th className="p-3">Số lượng</th>
              <th className="p-3">Chế biến</th>
              <th className="p-3">Giờ vào</th>
              <th className="p-3">Trả món</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.table}</td>
                <td className="p-3">{item.item}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">
                  <button className="bg-green-500 text-white py-1 px-3 rounded-lg">
                    Chế biến
                  </button>
                </td>
                <td className="p-3">{item.time}</td>
                <td className="p-3">
                  {item.returned ? (
                    <button className="bg-red-500 text-white py-1 px-3 rounded-lg">
                      Đã trả
                    </button>
                  ) : (
                    <button className="bg-yellow-500 text-white py-1 px-3 rounded-lg">
                      Trả món
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
