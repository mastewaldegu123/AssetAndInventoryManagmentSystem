import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewDepartment() {
  const [cate,setCate]=useState({})
  const {departmentID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatedepartment/${departmentID}`).then((resp)=>setCate({...resp.data[0]}))
  },[departmentID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
     
      
          <div>
          <strong>departmentID:</strong>
          <span>{cate.departmentID}</span>
           <br />
           <br />
           <strong>department_name:</strong>
          <span>{cate.departemnt_name}</span>
           <br />
           <br />
           <strong>department_role:</strong>
          <span>{cate.department_role}</span>
           <br />
           <br />
           <strong>number_ofemployee:</strong>
          <span>{cate.number_ofemployee}</span>
           <br />
           <br />
           </div>
           
        
      </div>
      <Link to="/department">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewDepartment