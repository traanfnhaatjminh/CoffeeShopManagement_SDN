import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Sidebar from '../../components/common/sidebar';
import Header from '../../components/common/header';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, createBill, setSelectedTable, updateQuantity } from '../../store/cart-slice/cartSlice'; 
export default function CashierScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  // const [selectedTable, setSelectedTable] = useState(null);
  // const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);
  const [tables, setTables] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const dispatch = useDispatch();
  const { cart, selectedTable } = useSelector((state) => state.cart);

  useEffect(() => {
    // Fetch categories, products, and tables when the component mounts
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get('/categories/list');
        setCategories(categoriesResponse.data);

        const productsResponse = await axios.get('/products/list');
        setProducts(productsResponse.data);

        const tablesResponse = await axios.get('/tables/list');
        setTables(tablesResponse.data);

        setFilteredProducts(productsResponse.data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const results = products.filter((product) => {
      // Check if category filter is applied
      const categoryMatch = selectedCategory
        ? product.category_id === selectedCategory
        : true;

      // Check if product name matches the search term
      const nameMatch = product.pname.toLowerCase().includes(searchTerm.toLowerCase());

      // Return true if both conditions are met
      return categoryMatch && nameMatch;
    });

    setFilteredProducts(results);
    if (searchTerm === '') {
      handleCategorySelect(selectedCategory);
    }
    if (results.length === 0 && searchTerm !== '') {
      setNoResultsMessage('Đồ uống không có trong menu hoặc trong phân loại đồ uống!'); // Message when no drinks are found
    }
    else {
      setNoResultsMessage('');
    }

    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm, products, isOpen, selectedCategory]); // Include selectedCategory as a dependency

  // const handleTableSelect = (table, index) => {
  //   if (table.status === true) {

  //     // Only allow if table is available
  //     setSelectedTable(index + 1);
  //   }
  // };
  const handleTableSelect = (table) => {
    if (table.status) {
      dispatch(setSelectedTable(table));
    }
  };

  // const handleAddToCart = (product) => {
  //   const existingProduct = cart.find((item) => item._id === product._id);
  //   if (existingProduct) {
  //     setCart(cart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)));
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1, total: product.price }]);
  //   }
  // };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // const handleQuantityChange = (_id, change) => {
  //   setCart(
  //     cart
  //       .map((item) =>
  //         item._id === _id
  //           ? {
  //             ...item,
  //             quantity: item.quantity + change,
  //             total: (item.quantity + change) * item.price,
  //           }
  //           : item
  //       )
  //       .filter((item) => item.quantity > 0)
  //   );
  // };
  const handleQuantityChange = (productId, change) => {
    dispatch(updateQuantity({ productId, change }));
  };
  // const calculateTotalPrice = () => {
  //   return cart.reduce((sum, item) => sum + item.total, 0);
  // };
  const calculateTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  };

  // const handleCategorySelect = (categoryId) => {
  //   if (categoryId === "all") {
  //     setFilteredProducts(products);
  //     setSelectedCategory(null); // Clear selected category
  //   } else {
  //     setSelectedCategory(categoryId); // Set the selected category
  //     axios.get(`/products/getByCategory/${categoryId}`)
  //       .then((response) => {
  //         console.log("Products by category:", response.data); // Log fetched products
  //         setFilteredProducts(response.data); // Reset filtered products
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching products by category:', error);
  //       });
  //   }
  // };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProducts(products);
    } else {
      axios
        .get(`/products/getByCategory/${categoryId}`)
        .then((response) => setFilteredProducts(response.data))
        .catch((error) => console.error('Error fetching products by category:', error));
    }
  };
  const handlePayment = () => {
    if (!selectedTable) {
      alert("Please select a table before proceeding to payment."); // Add validation for selected table
      return;
    }
    const billData = {
      created_time: new Date(),
      updated_time: new Date(),
      total_cost: calculateTotalPrice(),
      table_id: selectedTable._id,
      payment: 'cash',
      status: 1,
      product_list: cart.map((item) => ({
        productId: item._id,
        nameP: item.pname,
        imageP: item.image,
        quantityP: item.quantity,
        priceP: item.price,
      })),
    };

    dispatch(createBill(billData)); // Dispatch createBill action to create a new bill
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      {/* Main content */}
      <main className="flex flex-1">
        <Sidebar />

        {/* Menu and Cart */}
        <div className="flex space-x-6 p-4">
          {/* Menu Section */}
          <section className="flex-1">
          <div className="flex">
              <h2 className="text-lg font-bold flex-1">Menu</h2>
              <div className="relative flex flex-1 justify-end">
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
              <button
                key={'all'}
                className="btn-categories"
                onClick={() => handleCategorySelect("all")} // Call API when category is selected
              >
                Tất cả
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="btn-categories"
                  onClick={() => handleCategorySelect(category._id)} // Call API when category is selected
                >
                  {category.category_name}
                </button>
              ))}
            </div>

            {/* Drinks List */}
            <div className="grid grid-cols-5 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg shadow p-4 cursor-pointer"
                    onClick={() => handleAddToCart(product)}
                  >
                    <img src={product.image} alt={product.pname} className="mb-4 rounded" />
                    <h3 className="text-items">{product.pname}</h3>
                    <p className="text-price">{product.price} VND</p>
                  </div>
                ))
              ) : (
                <div className="col-span-5 text-center text-red-600">
                  {noResultsMessage}
                </div>
              )}
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
                    <td colSpan="4" className="py-2 text-center">No items in cart</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{calculateTotalPrice()} VND</span>
            </div>
            <div>
            <button className="w-full bg-brown-400 text-black py-2 px-4 rounded hover:bg-orange-400 font-bold mt-2">
                  Thanh toán
                </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
