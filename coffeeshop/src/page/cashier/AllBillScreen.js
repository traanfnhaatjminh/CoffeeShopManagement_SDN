import React from 'react';
import Header from '../../components/common/header';
import Sidebar from '../../components/common/sidebar';

export default function AllBillScreen() {
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
  ];

  return (
    <div  className="flex flex-col min-h-screen bg-gray-100">
        <Header/>
        <div className="flex ">
            <Sidebar/>
        
      <div className="bg-white p-6 rounded-lg shadow-sm w-screen" >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
            <p className="text-sm text-gray-500">
              A table of placeholder stock market data that does not make any sense.
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Share
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commision
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net amount
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactionsData.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.company}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.share}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.commision}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.price}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.quantity}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.netAmount}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
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
      </div>
    </div>
  );
}
