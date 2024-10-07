import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

export default function JobBoard({ setShowModal }) {
    const jobList = [
        {
            staff_name: "thanh nam",
            shift: 1,
            time: "8h-16h",
            role: "cashier"
        },
        {
            staff_name: "thuy linh",
            shift: 2,
            time: "15h-23h",
            role: "barista"
        },
        {
            staff_name: "minh phuong",
            shift: 1,
            time: "8h-16h",
            role: "warehouse"
        },
    ];

    return (
        <div className="flex-1 p-4">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
                    Quản lý ca làm việc
                </h1>
            </div>

            <div className="flex mb-4 items-center space-x-2">
                <input
                    type="text"
                    placeholder="Tìm kiếm nhân viên..."
                    className="border border-gray-300 p-2 rounded-lg w-1/3 sm:w-auto"
                />
                <button className="bg-brown-900 text-white p-2 rounded-lg">
                    <FaSearch />
                </button>

                <button className="bg-green-300 p-2 rounded-lg flex items-center" onClick={() => setShowModal(true)}>
                    <FaPlus className="mr-1" />
                    Thêm nhân viên
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">STT</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Tên nhân viên</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Ca làm</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {jobList.map((job, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-lg font-medium text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 text-md text-gray-500">{job.staff_name}</td>
                                <td className="px-6 py-4 text-md text-gray-500">{job.shift}</td>
                                <td className="px-6 py-4 text-md text-gray-500">{job.time}</td>
                                <td className="px-6 py-4 text-md text-gray-500">{job.role}</td>
                                <td className="px-6 py-4 text-md text-gray-500">
                                    <div>
                                        <select className="border rounded-md p-2">
                                            <option key={1} value={1} selected={job.shift === 1}>
                                                Làm ca 1
                                            </option>
                                            <option key={2} value={2} selected={job.shift === 2}>
                                                Làm ca 2
                                            </option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
