import React from 'react'
import {SidebarData} from '../Data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-blue-400 mt-4 pl-4 w-full h-9 flex justify-start items-center  text-2xl space-x-1  bg-indigo-500'
    const normalLink = 'hover:bg-blue-400 pl-4 mt-4 w-full h-9 flex justify-start items-center  text-2xl space-x-1 '

  return (
    <React.Fragment>
    <section>
      <div className="text-white">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
            >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar