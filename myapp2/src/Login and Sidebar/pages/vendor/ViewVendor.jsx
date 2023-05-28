import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewVendor() {
  const [cate,setCate]=useState({})
  const {vendorID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatevendor/${vendorID}`).then((resp)=>setCate({...resp.data[0]}))
  },[vendorID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>vendorID:</strong>
          <span>{cate.vendorID}</span>
           <br />
           <br />
           <strong>VendorName:</strong>
          <span>{cate.vendorname}</span>
           <br />
           <br />
           <strong>contactperson_name:</strong>
          <span>{cate.contactperson_name}</span>
           <br />
           <br />
           <strong>phone:</strong>
          <span>{cate.phone}</span>
           <br />
           <br />
           <strong>email:</strong>
          <span>{cate.email}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/vendor">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewVendor