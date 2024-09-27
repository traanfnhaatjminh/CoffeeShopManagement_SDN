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
        <div className='p-4'>
            <div className="items-center justify-between">
                <h1 className="text-2xl font-bold">Table List</h1>
            </div>

            <table className="min-w-full bg-white border mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Table ID</th>
                        <th className="px-4 py-2 border">Number of chair</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Edit Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((table, index) => (
                        <tr key={index} className='text-center'>
                            <td className="border px-4 py-2">{table.tableID}</td>
                            <td className="border px-4 py-2">{table.numberOfChair}</td>
                            <td className="border px-4 py-2" style={{ color: table.status === 1 ? 'green' : 'red' }}>
                                {table.status === 1 ? "Available" : "Not Available"}
                            </td>
                            <td className="border px-4 py-2">
                                <form>
                                    <select className="border border-gray-300 rounded p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value={'available'} selected={table.status === 1}>Available</option>
                                        <option value={'notavailable'} selected={table.status === 0}>Not Available</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
