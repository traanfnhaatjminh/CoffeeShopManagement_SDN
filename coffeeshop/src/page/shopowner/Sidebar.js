import React, { useState } from 'react';

export default function Sidebar() {
  const menuItems = ['Home', 'Warehouse', 'Categories', 'Table List', 'All Bill', 'Job Board', 'Statistic', 'Setting'];

  return (
    <div className="w-64 bg-gray-200 p-4 space-y-4">
      {menuItems.map((item) => (
        <button key={item} className="w-full p-2 text-left bg-gray-300 hover:bg-gray-400 rounded-lg">
          {item}
        </button>
      ))}
    </div>
  );
}
