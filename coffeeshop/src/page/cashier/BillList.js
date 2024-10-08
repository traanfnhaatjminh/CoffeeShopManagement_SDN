import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

export default function BillList() {
  const transactionsData = [
    {
      id: 'AAPS0L',
      company: 'Chase & Co.',
      share: 'CAC',
      commision: '+$4.37',
      price: '$3,509.00',
      quantity: '12.00',
      netAmount: '$4,397.00',
    },
    {
      id: 'O2KMND',
      company: 'Amazon.com Inc.',
      share: 'AMZN',
      commision: '+$5.92',
      price: '$2,900.00',
      quantity: '8.80',
      netAmount: '$3,509.00',
    },
    {
      id: '1LP2P4',
      company: 'Procter & Gamble',
      share: 'PG',
      commision: '-$5.65',
      price: '$7,978.00',
      quantity: '2.30',
      netAmount: '$2,652.00',
    },
    {
      id: 'PS9FJGL',
      company: 'Berkshire Hathaway',
      share: 'BRK',
      commision: '+$4.37',
      price: '$3,116.00',
      quantity: '48.00',
      netAmount: '$6,055.00',
    },
    {
      id: 'QYR135',
      company: 'Apple Inc.',
      share: 'AAPL',
      commision: '+$38.00',
      price: '$8,508.00',
      quantity: '36.00',
      netAmount: '$3,496.00',
    },
    {
      id: '99SLSM',
      company: 'NVIDIA Corporation',
      share: 'NVDA',
      commision: '+$1,427.00',
      price: '$4,425.00',
      quantity: '18.00',
      netAmount: '$2,109.00',
    },
    {
      id: 'OSDJLS',
      company: 'Johnson & Johnson',
      share: 'JNJ',
      commision: '+$1,937.23',
      price: '$4,038.00',
      quantity: '32.00',
      netAmount: '$7,210.00',
    },
    {
      id: '4HJK3N',
      company: 'JPMorgan',
      share: 'JPM',
      commision: '-$3.67',
      price: '$3,966.00',
      quantity: '80.00',
      netAmount: '$6,432.00',
    },
    {
      id: '4HJK3N',
      company: 'JPMorgan',
      share: 'JPM',
      commision: '-$3.67',
      price: '$3,966.00',
      quantity: '80.00',
      netAmount: '$6,432.00',
    },
  ];
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <div className="flex-grow flex flex-col bg-white shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-6">
          <div>
            <h1 className="text-lg font-bold px-2 font-lauren border bg-brown-900 text-white border-brown-400 rounded-lg">
              Danh sách hóa đơn 
            </h1>
            <p className="text-sm text-gray-500"></p>
          </div>
          <div className="relative flex flex-1 justify-end w-1/4 mr-6">
            <input
              type="text"
              className="relative w-2/3
                   bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 sm:text-sm"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
              <IoSearch />
            </span>
          </div>

          <button className="bg-brown-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
            Export
          </button>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="h-screen overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    TG tạo hóa đơn
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    TG cập nhật
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    Bàn
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    Giảm giá
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    PT Thanh Toán
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    Tổng tiền
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactionsData.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.share}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.commision}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.netAmount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" flex justify-center py-4 bg-white border-t border-gray-200">
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <GrFormPrevious aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <GrFormNext aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
