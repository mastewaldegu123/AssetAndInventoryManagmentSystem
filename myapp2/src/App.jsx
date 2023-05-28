import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainPage from "./Login and Sidebar/AssetSideBar/component/MainPage"
function App() {
  const routes=useRoutes([
{
  path:"/mainpage",
  element:<MainPage/>
}
  ])
  return (
    <React.Fragment>
      {routes}
    </React.Fragment>
   
  )
}

export default App