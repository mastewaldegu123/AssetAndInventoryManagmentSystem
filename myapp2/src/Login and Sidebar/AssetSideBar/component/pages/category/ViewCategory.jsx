import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewCategory() {
  const [cate,setCate]=useState({})
  const {categoryID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatecategory/${categoryID}`).then((resp)=>setCate({...resp.data[0]}))
  },[categoryID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>categoryID:</strong>
          <span>{cate.categoryID}</span>
           <br />
           <br />
           <strong>CategoryName:</strong>
          <span>{cate.categoryname}</span>
           <br />
           <br />
           <strong>List OF product:</strong>
          <span>{cate.listofproduct}</span>
           <br />
           <br />
           <strong>Category description:</strong>
          <span>{cate.category_description}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/category">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewCategory