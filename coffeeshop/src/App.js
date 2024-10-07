import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutProduct from './page/warehouse/layout_product';
import LayoutCategory from './page/warehouse/layout_category';

import AuthLogin from '@/page/auth/Login';
import ForgotPassword from '@/page/auth/ForgotPassword';
import VerifyPassword from '@/page/auth/VerifyPassword';
import ResetPassword from '@/page/auth/ResetPassword';

import React, { useState } from 'react';
import axios from 'axios';
import Layout from './page/shopowner/layout';
import CashierScreen from './page/cashier/CashierScreen';
import Waiter from './page/cashier/layout';
import AllBillScreen from './page/cashier/AllBillScreen';
import TableList from './page/cashier/TableList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLogin />}></Route>
        <Route path="/login/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/login/verify-password" element={<VerifyPassword />}></Route>
        <Route path="/login/reset-password" element={<ResetPassword />}></Route>
        <Route path="/allbill" element={<AllBillScreen/>}/>
        <Route path="/cashier" element={<CashierScreen />} />
        <Route path="/tablelist" element={<TableList />} />
        <Route path="/warehouse/categories" element={<LayoutCategory />} />
        <Route path="/warehouse/products" element={<LayoutProduct />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/admin/userlist" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
