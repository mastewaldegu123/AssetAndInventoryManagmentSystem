import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewAsset() {
  const [cate,setCate]=useState({})
  const {assetID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset/${assetID}`).then((resp)=>setCate({...resp.data[0]}))
  },[assetID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>seralNO:</strong>
          <span>{cate.seralNO}</span>
           <br />
           <br />
           <strong>qunatity:</strong>
          <span>{cate.qunatity}</span>
           <br />
           <br />
           <strong>unit:</strong>
          <span>{cate.unit}</span>
           <br />
           <br />
           <strong>asset_Price:</strong>
          <span>{cate.asset_Price}</span>
           <br />
           <br />
           <strong>available_in_store:</strong>
          <span>{cate.available_in_store}</span>
           <br />
           <br />
           <strong>date:</strong>
          <span>{cate.date}</span>
           <br />
           <br />
           <strong>productID:</strong>
          <span>{cate.productID}</span>
           <br />
           <br />
           
           <strong>supplyID:</strong>
          <span>{cate.supplyID}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/asset">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewAsset