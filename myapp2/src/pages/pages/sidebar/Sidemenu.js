import React from 'react'
import './sidebar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './component/Navbar/Sidebar'
import Dashboard from './pages/Dashboard'
import Asset from './pages/Asset'
import Asset_Returned from './pages/Asset_Returned'
import Category from './pages/Category'
import Department from './pages/Department'
import E_I_Contract from './pages/E_I_Contract'
import Employee from './pages/Employee'
import Product from './pages/Product'
import Request from './pages/Request'
import Supply from './pages/Supply'
import Vendor from './pages/Vendor'
const Sidemenu = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/asset' element={<Asset />} />
          <Route path='/asset_returned' element={<Asset_Returned />} />
          <Route path='/category' element={<Category />} />
          <Route path='/department' element={<Department />} />
          <Route path='/e_i_contract' element={<E_I_Contract />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/product' element={<Product />} />
          <Route path='/request' element={<Request />} />
          <Route path='/supply' element={<Supply />} />
          <Route path='/vendor' element={<Vendor />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default Sidemenu
