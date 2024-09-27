import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Sidebar from "../../components/common/sidebar";
import Header from "../../components/common/Header";
import { IoSearch } from "react-icons/io5";

const people = [
  "Dries Vincent",
  "Leslie Alexander",
  "Michael Foster",
  "Lindsay Walton",
  "Courtney Henry",
  "Tom Cook",
  "Whitney Francis",
];
const tables = [
  { id: 1, status: "available" },
  { id: 2, status: "occupied" },
  { id: 3, status: "available" },
  { id: 4, status: "occupied" },
  { id: 5, status: "available" },
];
export default function CashierScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);
  const inputRef = useRef(null);

  useEffect(() => {
    setFilteredPeople(
      people.filter((person) =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>

      {/* Main content */}
      <main className="flex-1 ">
      <Header/>
        {/* Header */}
        {/* <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Menu</h1>

          <div className="relative">
            <div>
              <input
                ref={inputRef}
                type="text"
                className="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 sm:text-sm"
                placeholder={selected}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                onClick={() => setIsOpen(true)}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filteredPeople.map((person) => (
                  <li
                    key={person}
                    className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                      person === selected
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSelected(person);
                      setSearchTerm("");
                      setIsOpen(false);
                    }}
                  >
                    <span
                      className={`block truncate ${
                        person === selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person}
                    </span>
                    {person === selected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-x-4 flex">
            <span
              class="inline-flex items-center rounded-md bg-green-50 px-7 py-2 text-sm
           font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >
              Minh
            </span>
            {/* <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded"> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 "
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>

          </div>
        </header>  */}

        {/* Menu and Cart */}
        <div className="flex space-x-6 p-4">
        
          {/* Menu Section */}
          <section className="flex-1">
            <div className="flex">
              <h2 className="text-lg font-bold flex-1">Menu</h2>
              <div className=" relative flex flex-1 justify-end">
              <input
                ref={inputRef}
                type="text"
                className="relative w-2/3
                   bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500 sm:text-sm"
                placeholder={selected}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                onClick={() => setIsOpen(true)}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
              <IoSearch />
              </span>
            </div>

           
        
            </div>



            <div className="grid grid-cols-5 gap-4 mb-6 mt-3">
              <button className="btn-categories">
                Cà phê highlight
              </button>
              <button className="btn-categories">
                Cà phê Việt Nam
              </button>
              <button className="btn-categories">
                Cà phê máy
              </button>
              <button className="btn-categories">
                Cold brew
              </button>
              <button className="btn-categories">
                Trà trái cây
              </button>
              <button className="btn-categories">
                Hi-tea
              </button>
              <button className="btn-categories">
                Trà xanh tây bắc
              </button>
              <button className="btn-categories">
                Chocolate
              </button>
            </div>

            {/* Drinks List */}
            <div className="grid grid-cols-5 gap-4">
              {/* Drink 1 */}
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Trà Xanh Espresso Marble"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Trà Xanh Espresso Marble</h3>
                <p className="text-price">49,000.0 VND</p>
              </div>
              {/* Drink 2 */}
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Bơ Arabica"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Bơ Arabica</h3>
                <p className="text-price">49,000.0 VND</p>
              </div>
              {/* Drink 3 */}
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Đường Đen Sữa Đá"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Đường Đen Sữa Đá</h3>
                <p className="text-price">45,000.0 VND</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Đường Đen Sữa Đá"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Đường Đen Sữa Đá</h3>
                <p className="text-price">45,000.0 VND</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Đường Đen Sữa Đá"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Đường Đen Sữa Đá</h3>
                <p className="text-price">45,000.0 VND</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Đường Đen Sữa Đá"
                  className="mb-4 rounded"
                />
                <h3 className="text-items">Đường Đen Sữa Đá</h3>
                <p className="text-price">45,000.0 VND</p>
              </div>
            </div>
          </section>

          {/* Cart Section */}
          <section className="w-1/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Cart</h2>
            <h2 className="text-xl font-semibold mb-4">Table</h2>
            {/* <div className="flex mb-6">
              <div className="w-1/2 pr-3">
                <input
                  id="guests"
                  type="number"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Number of guests"
                />
              </div>
              <div className="w-1/2">
                <select
                  id="table"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                >
                  <option value="" disabled>
                    Select Table
                  </option>
                  <option value="">Table 1</option>
                  <option value="">Table 2</option>
                  <option value="">Table 3</option>
                </select>
              </div>
            </div> */}

            <div className="grid grid-cols-5 gap-2">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className={`table ${
                    table.status === "available" ? "available" : "occupied"
                  }`}
                >
                  <span> {table.id}</span>
                  <br />
                </div>
              ))}
            </div>
            <table className="w-full text-left mb-6">
              <thead>
                <tr>
                  <th className="border-b py-2">Product Name</th>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Quantity</th>
                  <th className="border-b py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="py-4 text-center">
                    No items in cart
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-lg font-semibold">0.0 VND</span>
            </div>
            <button className="w-full bg-brown-500 text-black py-2 px-4 rounded hover:bg-orange-400">
              Create Bill
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
