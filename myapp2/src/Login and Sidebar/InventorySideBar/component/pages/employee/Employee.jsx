import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./Employee.css"
function Employee() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getemployee",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteEmployee=(employeeID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteemployee/${employeeID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addemployee"} >
     <button  className='four' >AddEmployee</button>
     </Link>
     
<table className='o' >


   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>empfname</th> 
       <th style={{textAlign:"center"}}>emplname</th> 
       <th style={{textAlign:"center"}}>gender</th> 
       <th style={{textAlign:"center"}}> emp_Email</th> 
       <th style={{textAlign:"center"}}> phone</th>  
       <th style={{textAlign:"center"}}> salary</th> 
       <th style={{textAlign:"center"}}> dateofhire</th> 
       <th style={{textAlign:"center"}}> postion</th> 
       <th style={{textAlign:"center"}}> tittle</th> 
     
       <th style={{textAlign:"center"}}> ManagerID</th> 
       <th style={{textAlign:"center"}}> departmentID</th> 
      
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.employeeID}>
                   
                    <th  scope='row'>{index + 1}</th>
                    
                    <td>{item.empfname}</td>
                    <td>{item.emplname}</td>
                    <td>{item.gender}</td>
                    <td>{item.emp_Email}</td>
                    <td>{item.phone}</td>
                    <td>{item.salary}</td>
                    <td>{item.dateofhire}</td>
                    <td>{item.postion}</td>
                    <td>{item.tittle}</td>
                    <td>{item.ManagerID}</td>
                    <td>{item.departmentID}</td>
                    <td  className='six'>
                        <Link to={`/updateemployee/${item.employeeID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteEmployee(item.employeeID)}>Delete </button>
                        <Link to={`/viewemployee/${item.employeeID}`}>
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

export default Employee