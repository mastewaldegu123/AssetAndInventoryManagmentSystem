
import {AiOutlineDashboard} from "react-icons/ai"
import {TbAsset} from "react-icons/tb"
import {BsPersonCircle} from "react-icons/bs"
import {BiGitBranch} from "react-icons/bi"
import {GiReturnArrow} from "react-icons/gi"
import {MdProductionQuantityLimits} from "react-icons/md"
import {MdCategory} from "react-icons/md"
import {GiBuyCard} from "react-icons/gi"
import {FaFileContract} from "react-icons/fa"
import {GoRequestChanges} from "react-icons/go"
export const SidebarData=[
    {
        title: "Dashboard",
        path: "/",
        icon: <AiOutlineDashboard/>,
      },
      {
        title: "Asset",
        path: "/asset",
        icon: <TbAsset />,
      },
      {
        title: "Employee",
        path: "/employee",
        icon: <BsPersonCircle />,
      },
      {
        title: "Department",
        path: "/department",
        icon: <BiGitBranch />,
        
      },
      {
        title: "Asset_Return",
        path: "/asset_return",
        icon: <GiReturnArrow />,
       
      },
      {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Category",
        path: "/category",
        icon: <MdCategory/>,
      },
     
      {
        title: "Vendor",
        path: "/vendor",
        icon: <GiBuyCard />,
      },
      {
        title: "Supply",
        path: "/supply",
        icon: <GiBuyCard />,
      },
      {
        title: "Request",
        path: "/request",
        icon: <GoRequestChanges/>,
        
      },
      {
        title: "E_I_Contract",
        path: "/emp_item",
        icon: <FaFileContract />,
       
      },
]