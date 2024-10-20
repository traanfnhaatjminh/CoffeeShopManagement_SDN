import React from 'react';
import { MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import logo from '../../assets/img/z5872646337869_8529aff6a7d5eb21b.png';

export default function Header() {
  return (
    <div>
      <nav className="bg-brown-900 flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-10 mr-2" />
          <span className="text-white font-pacifico text-2xl">Coffe House Management</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white">Admin</span>
          <button className="bg-brown-700 text-white p-2 rounded-lg hover:bg-blue-400">
            <CgProfile className="w-5 h-5" />
          </button>
          <button className="bg-brown-800 text-white p-2 rounded-lg hover:bg-red-500 w-full ">
            <MdLogout className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}
