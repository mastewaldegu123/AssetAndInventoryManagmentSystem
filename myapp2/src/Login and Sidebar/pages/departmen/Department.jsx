import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./Department.css"
function Department() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getdepartment",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deletedepartment=(departmentID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletedepartment/${departmentID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/adddepartment"} >
     <button  className='four' >AddDepartment</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>department_name</th> 
       <th style={{textAlign:"center"}}>department_role</th> 
       <th style={{textAlign:"center"}}>number_ofemployee</th> 
      
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
            
                <tr key={item.departmentID}>
                   
                    <th  scope='row'>{index + 1}</th>
                    
                    <td>{item.department_name}</td>
                    <td>{item.department_role}</td>
                    <td>{item.number_ofemployee}</td>
                   
                    <td  className='six'>
                        <Link to={`/updatedepartment/${item.departmentID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deletedepartment(item.departmentID)}>Delete </button>
                        <Link to={`/viewdepartment/${item.departmentID}`}>
                        <button  className='five'>view </button>
                        </Link>
                    </td>
                   
                </tr>
                
            )
        })}
    </tbody>
</table>

    </div>
  )
  
}

export default Department