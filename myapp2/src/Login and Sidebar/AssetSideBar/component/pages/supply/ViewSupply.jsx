import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewSupply() {
  const [cate,setCate]=useState({})
  const {supplyID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatesupply/${supplyID}`).then((resp)=>setCate({...resp.data[0]}))
  },[supplyID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
     
          <div>
          <strong>supplyID:</strong>
          <span>{cate.supplyID}</span>
           <br />
           <br />
           <strong>supplyType:</strong>
          <span>{cate.supplyType}</span>
           <br />
           <br />
           <strong>Supplyingdate:</strong>
          <span>{cate.Supplyingdate}</span>
           <br />
           <br />
           <strong>vendorID:</strong>
          <span>{cate.vendorID}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/supply">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewSupply