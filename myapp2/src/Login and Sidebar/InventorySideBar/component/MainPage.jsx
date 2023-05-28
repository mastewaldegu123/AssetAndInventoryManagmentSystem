import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from './Sidebar'

const MainPage = () => {
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12 '>
          <div className='col-span-3 bg-sky-500 h-auto pl-2 md:col-span-2 '>
              <Sidebar/>   
          </div>


          <div className='col-span-9 h-auto pl-2 md:col-span-10 '>
             <NavPage/>
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;