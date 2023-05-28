import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewE_I_Contract() {
  const [cate,setCate]=useState({})
  const {emp_itemID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemp_item/${emp_itemID}`).then((resp)=>setCate({...resp.data[0]}))
  },[emp_itemID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
     
      
          <div>
          <strong>Purpose:</strong>
          <span>{cate.Purpose}</span>
           <br />
           <br />
           <strong>asset_type:</strong>
          <span>{cate.asset_type}</span>
           <br />
           <br />
           <strong>dateofcontract:</strong>
          <span>{cate.dateofcontract}</span>
           <br />
           <br />
           <strong>assetID:</strong>
          <span>{cate.assetID}</span>
           <br />
           <br />
           <strong>employeeID:</strong>
          <span>{cate.employeeID}</span>
           <br />
           <br />
           <strong>requestNo:</strong>
          <span>{cate.requestNo}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/emp_item">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewE_I_Contract