import React from "react";
import { Routes, Route } from "react-router-dom";

import Figma from '../pages/Figma'
import Asset from "..//pages/Asset/Asset"
import Node from '../pages/Node'


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/asset" element={<Asset />} />
        <Route path="/figma" element={<Figma />} />
        
        <Route path="/node" element={<Node />} />
        
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;