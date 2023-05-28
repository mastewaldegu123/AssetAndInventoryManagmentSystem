import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Asset from "./pages/Asset/Asset"
import AddEditAsset from "./pages/Asset/AddEditAsset"
import ViewAsset from "./pages/Asset/ViewAsset"
import Employee from "./pages/employee/Employee"
import AddEditEmployee from "./pages/employee/AddEditEmployee"
import ViewEmployee from "./pages/employee/ViewEmployee"
import Product from "./pages/product/Prouct"
import AddEditProduct from "./pages/product/AddEditProduct"
import ViewProduct from "./pages/product/ViewProduct"
import Category from "./pages/category/Category"
import AddEditCategory from "./pages/category/AddEditCategory"
import ViewCategory from "./pages/category/ViewCategory"
import Vendor from "./pages/vendor/Vendor"
import AddEditVendor from "./pages/vendor/AddEditVendor"
import ViewVendor from "./pages/vendor/ViewVendor"
import Supply from "./pages/supply/Supply";
import ViewSupply from "./pages/supply/ViewSupply"
import AddEditSupply from "./pages/supply/AddEditSupply"
import Request from "./pages/Request/Request"
import AddEditRequest from "./pages/Request/AddEditRequest"
import ViewRequest from "./pages/Request/ViewRequest"
import E_I_Contract from "./pages/E_I_contract/E_I_Contract"
import AddEditE_I_Contract from "./pages/E_I_contract/AddEditE_I_Contract"
import ViewE_I_Contract from "./pages/E_I_contract/ViewE_I_Contract"

import Asset_Return from "./pages/Asset_return/Asset_returned"
import AddEditAsset_returned  from "./pages/Asset_return/AddEditAsset_returned";
import ViewAsset_Return from "./pages/Asset_return/ViewAsset_returned"
import Dashboard from "./pages/Dashboard"
import Department from "./pages/departmen/Department"
import AddEditDepartment from "./pages/departmen/AddEditDepartment"
import ViewDepartment from "./pages/departmen/ViewDepartment"

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/addasset" element={<AddEditAsset />} />
        <Route path="/updateasset" element={<AddEditAsset />} />
        <Route path="/viewasset" element={<ViewAsset />} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/addemployee" element={<AddEditEmployee/>} />
        <Route path="/updateemployee" element={<AddEditEmployee/>} />
        <Route path="/viewemployee" element={<ViewEmployee/>} />
        <Route path="/department" element={<Department />} />
        <Route path="/adddepartment" element={<AddEditDepartment />} />
        <Route path="/updatedepartment" element={<AddEditDepartment />} />
        <Route path="/viewdepartment" element={<ViewDepartment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<AddEditProduct />} />
        <Route path="/updateproduct/:productID" element={<AddEditProduct />} />
        <Route path="/viewproduct/:productID" element={<ViewProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/addcategory" element={<AddEditCategory />} />
        <Route path="/updatecategory/:categoryID" element={<AddEditCategory />} />
        <Route path="/viewcategory/:categoryID" element={<ViewCategory />} />
        <Route path="/vendor" element={<Vendor />} />

        <Route path="/addvendor" element={<AddEditVendor />} />
        <Route path="/updatevendor/:vendorID" element={<AddEditVendor />} />
        <Route path="/viewvendor/:vendorID" element={<ViewVendor />} />
        <Route path="/emp_item" element={<E_I_Contract />} />
        <Route path="/updateemp_item/:emp_itemID" element={<AddEditE_I_Contract />} />
        <Route path="/addemp_item" element={<AddEditE_I_Contract />} />
        <Route path="/viewemp_item/:emp_itemID" element={<ViewE_I_Contract />} />
        <Route path="/addasset_return" element={<AddEditAsset_returned />} />
        <Route path="/asset_return" element={<Asset_Return />} />
        <Route path="/updateasset_return" element={<AddEditAsset_returned />} />
        <Route path="/viewasset_return" element={<ViewAsset_Return />} />
        <Route path="/supply" element={<Supply />} />
        <Route path="/addsupply" element={<AddEditSupply />} />
        <Route path="/updatesupply/:supplyID" element={<AddEditSupply />} />
        <Route path="/viewsupply/:supplyID" element={<ViewSupply />} />
        <Route path="/addrequest" element={<AddEditRequest />} />
        <Route path="/updaterequest" element={<AddEditRequest />} />
        <Route path="/viewrequest" element={<ViewRequest />} />
        <Route path="/request" element={<Request />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;