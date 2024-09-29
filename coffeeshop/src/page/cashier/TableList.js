import React from 'react'

export default function TableList() {

    const tables = [
        { tableID: 1, numberOfChair: 2, status: 1 },
        { tableID: 2, numberOfChair: 2, status: 1 },
        { tableID: 3, numberOfChair: 4, status: 0 },
        { tableID: 4, numberOfChair: 4, status: 1 },
        { tableID: 5, numberOfChair: 4, status: 1 },
        { tableID: 6, numberOfChair: 4, status: 0 },
        { tableID: 7, numberOfChair: 6, status: 1 },
        { tableID: 8, numberOfChair: 6, status: 1 },
        { tableID: 9, numberOfChair: 6, status: 1 },
        { tableID: 10, numberOfChair: 8, status: 1 }
    ];

    return (
        <div className="flex-1 p-4">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
                    Danh sách bàn 
                </h1>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Mã bàn</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Số ghế/bàn</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Cập nhật</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tables.map((table, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-lg font-medium text-gray-900">{table.tableID}</td>
                                <td className="px-6 py-4 text-md text-gray-500">{table.numberOfChair}</td>
                                <td className="px-6 py-4 text-md text-gray-500" style={{ color: table.status === 1 ? 'green' : 'red' }}>
                                    {table.status === 1 ? "Sẵn bàn" : "Đang có khách"}
                                </td>
                                <td className="px-6 py-4 text-md text-gray-500">
                                    <form>
                                        <select className="border border-gray-300 rounded p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value={'available'} selected={table.status === 1}>Sẵn bàn</option>
                                            <option value={'notavailable'} selected={table.status === 0}>Đang có khách</option>
                                        </select>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
