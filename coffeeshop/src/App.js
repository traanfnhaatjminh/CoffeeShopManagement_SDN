

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseProduct from './page/warehouse/warehouseProduct';
import WarehouseCategory from './page/warehouse/warehouseCategory';

import React, { useState } from 'react';
import axios from 'axios';
import Layout from './page/shopowner/layout'
import CashierScreen from './page/cashier/CashierScreen';


function App() {
  return (
    <BrowserRouter>

   
      <Routes>
        <Route path="/" element={<CashierScreen />} />
        <Route path="/warehouse/categories" element={<WarehouseCategory />} />
        <Route path="/warehouse/products" element={<WarehouseProduct />} />


        <Route path="/admin/userlist" element={<Layout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
