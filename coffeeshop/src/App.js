import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehouseProduct from './page/warehouse/warehouseProduct';
import WarehouseCategory from './page/warehouse/warehouseCategory';

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/warehouse/categories" element={<WarehouseCategory />} />
        <Route path="/warehouse/products" element={<WarehouseProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
