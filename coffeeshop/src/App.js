import React, { useState } from 'react';
import axios from 'axios';
import Layout from './page/shopowner/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/userlist" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
