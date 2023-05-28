import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewEmployee() {
  const [cate,setCate]=useState({})
  const {employeeID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemployee/${employeeID}`).then((resp)=>setCate({...resp.data[0]}))
  },[employeeID])
  return (
    <div className='one'>
    <div  style={{marginTop:"50px"}}>
    <div className="eleven"> 
          <p>user detail</p>
        </div>
      <div className="ten">
      
      
          <div>
          <strong>empfname:</strong>
          <span>{cate.empfname}</span>
           <br />
           <br />
           <strong>emplname:</strong>
          <span>{cate.emplname}</span>
           <br />
           <br />
           <strong>gender:</strong>
          <span>{cate.gender}</span>
           <br />
           <br />
           
           <strong>emp_Email:</strong>
          <span>{cate.emp_Email}</span>
           <br />
           <br />
           
           <strong>phone:</strong>
          <span>{cate.phone}</span>
           <br />
           <br />
           
           <strong>salary:</strong>
          <span>{cate.salary}</span>
           <br />
           <br />
        
           <strong>dateofhire:</strong>
          <span>{cate.dateofhire}</span>
           <br />
           <br />
           
            <strong>postion:</strong>
            <span>{cate.postion}</span>
             <br />
             <br />
            
             <strong>tittle:</strong>
             <span>{cate.tittle}</span>
              <br />
              <br />
              
              <strong>ManagerID:</strong>
              <span>{cate.ManagerID}</span>
               <br />
               <br />
               <strong>departmentID:</strong>
              <span>{cate.departmentID}</span>
               <br />
               <br />
               </div>
           
        
      </div>
      <Link to="/employee">
           <button className="twelve">Go Back</button>
           </Link>
    </div>
    </div>
  )
  
}

export default ViewEmployee