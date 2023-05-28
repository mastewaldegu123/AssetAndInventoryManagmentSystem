import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewRequest() {
  const [cate,setCate]=useState({})
  const {requestNO}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateRequest/${requestNO}`).then((resp)=>setCate({...resp.data[0]}))
  },[requestNO])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      requestNo, requesterID, quantity, unit, price, approvedby, recievedby, productID
      
          <div>
          <strong>requestNO:</strong>
          <span>{cate.re}</span>
           <br />
           <br />
           <strong>requesterID:</strong>
          <span>{cate.requesterID}</span>
           <br />
           <br />
           <strong>quantity:</strong>
          <span>{cate.quantity}</span>
           <br />
           <br />
           <strong>unit:</strong>
          <span>{cate.unit}</span>
           <br />
           <br />
           <strong>price:</strong>
          <span>{cate.price}</span>
           <br />
           <br />
           <strong>approvedby:</strong>
          <span>{cate.approvedby}</span>
           <br />
           <br />
           <strong>recievedby:</strong>
          <span>{cate.recievedby}</span>
           <br />
           <br />
           <strong>productID:</strong>
          <span>{cate.productID}</span>
           <br />
           <br />
           </div>
        
      </div>
      <Link to="/request">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewRequest