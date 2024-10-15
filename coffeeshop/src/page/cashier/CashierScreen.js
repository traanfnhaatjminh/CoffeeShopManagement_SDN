import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';

const people = [
  'Dries Vincent',
  'Leslie Alexander',
  'Michael Foster',
  'Lindsay Walton',
  'Courtney Henry',
  'Tom Cook',
  'Whitney Francis',
];
const tables = [
  { id: 1, status: 'available' },
  { id: 2, status: 'occupied' },
  { id: 3, status: 'available' },
  { id: 4, status: 'occupied' },
  { id: 5, status: 'available' },
];
export default function CashierScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(people);
  const inputRef = useRef(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    setFilteredPeople(people.filter((person) => person.toLowerCase().includes(searchTerm.toLowerCase())));
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    axios.get('/categories/list')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    axios
      .get("/products/list")
      .then((response) => {
        setProducts(response.data); // Set the fetched products to state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    axios
      .get("/tables/list")
      .then((response) => {
        setTables(response.data); // Set the fetched products to state
      })
      .catch((error) => {
        console.error("Error fetching tables:", error);
      });

  }, [searchTerm, isOpen]);

  const handleTableSelect = (table, index) => {
    if (table.status === true) {
      // Only allow if table is available
      setSelectedTable(index + 1);
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      setCart(cart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1, total: product.price }]);
    }
  };

  const handleQuantityChange = (_id, change) => {
    setCart(
      cart
        .map((item) =>
          item._id === _id
            ? {
              ...item,
              quantity: item.quantity + change,
              total: (item.quantity + change) * item.price,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  };

  const handleCategorySelect = (categoryId) => {
    console.log("Selected Category ID:", categoryId);  // Kiểm tra ID được chọn

    axios.get(`/products/getByCategory/${categoryId}`)
      .then((response) => {
        console.log("Products by category:", response.data);  // Kiểm tra dữ liệu trả về
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products by category:', error);
      });
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      {/* Main content */}
      <main className=" flex flex-1 ">
        <Sidebar />

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
              {categories.map((category) => (
                <button
                  key={category._id}
                  className="btn-categories"
                  onClick={() => handleCategorySelect(category._id)} // Gọi API khi chọn category
                >
                  {category.category_name}
                </button>
              ))}
            </div>

            {/* Drinks List */}
            <div className="grid grid-cols-5 gap-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <img src={product.image} alt={product.pname} className="mb-4 rounded" />
                  <h3 className="text-items">{product.pname}</h3>
                  <p className="text-price">{product.price} VND</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cart Section */}
          <section className="w-1/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Cart</h2>
            <h2 className="text-xl font-semibold mb-4">Table</h2>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {tables.map((table, index) => (
                <div
                  key={table._id}
                  className={`table ${table.status === true ? 'available' : 'occupied'}`}
                  onClick={() => handleTableSelect(table, index)}
                  style={{
                    cursor: table.status === true ? 'pointer' : 'not-allowed',
                  }}
                >
                  <span>{index + 1}</span>
                </div>
              ))}
            </div>

            {selectedTable && <p className="text-lg font-bold mb-4">Selected Table: {selectedTable}</p>}

            <table className="w-full text-left mb-6">
              <thead>
                <tr>
                  <th className="border-b py-2">Name</th>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Quantity</th>
                  <th className="border-b py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2">{item.pname}</td>
                      <td className="py-2">{item.price} VND</td>
                      <td className="py-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item._id, -1)}
                            className="px-2 py-1 bg-gray-300 rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item._id, 1)}
                            className="px-2 py-1 bg-gray-300 rounded"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2">{item.total} VND</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center">
                      No items in cart
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-lg font-semibold">{calculateTotalPrice()} VND</span>
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
