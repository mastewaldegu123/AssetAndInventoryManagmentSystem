import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewProduct() {
  const [pro,setPro]=useState({})
  const {productID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateproduct/${productID}`).then((resp)=>setPro({...resp.data[0]}))
  },[productID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>productID:</strong>
          <span>{pro.productID}</span>
           <br />
           <br />
           <strong>ProductName:</strong>
          <span>{pro.productname}</span>
           <br />
           <br />
           <strong>product desciption:</strong>
          <span>{pro.product_description}</span>
           <br />
           <br />
           <strong>CategoryID:</strong>
          <span>{pro.categoryID}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/product">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewProduct