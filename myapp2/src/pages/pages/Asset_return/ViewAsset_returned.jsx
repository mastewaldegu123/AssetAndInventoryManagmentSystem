import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  Viewasset_returnedID() {
  const [cate,setCate]=useState({})
  const {asset_returnedID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset_returned/${asset_returnedID}`).then((resp)=>setCate({...resp.data[0]}))
  },[asset_returnedID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>asset_returnedID:</strong>
          <span>{cate.asset_returnedID}</span>
           <br />
           <br />
           <strong>Purpose_returned:</strong>
          <span>{cate.Purpose_returned}</span>
           <br />
           <br />
           <strong>Date_returned:</strong>
          <span>{cate.Date_returned}</span>
           <br />
           <br />
           <strong>emp_itemID:</strong>
          <span>{cate.emp_itemID}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/asset_returnedID">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default Viewasset_returnedID