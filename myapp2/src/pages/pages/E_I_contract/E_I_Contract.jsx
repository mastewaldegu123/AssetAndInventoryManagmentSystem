import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./E_I_Contract.css"

function E_I_Contract() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getemp_item",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteemp_item=(emp_itemID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteemp_item/${emp_itemID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addemp_item"} >
     <button  className='four' >AddE_I_Contract</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>Purpose</th> 
       <th style={{textAlign:"center"}}>asset_type</th> 
       <th style={{textAlign:"center"}}>dateofcontract</th> 
       <th style={{textAlign:"center"}}>assetID</th> 
       <th style={{textAlign:"center"}}>employeeID</th> 
       <th style={{textAlign:"center"}}>requestNo</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.emp_itemID}>
                   
                    <th  scope='row'>{index + 1}</th>
                    
                    <td>{item.Purpose}</td>
                    <td>{item.asset_type}</td>
                    <td>{item.dateofcontract}</td>
                    <td>{item.assetID}</td>
                    <td>{item.employeeID}</td>
                    <td>{item.requestNo}</td>

                    <td  className='six'>
                        <Link to={`/updateemp_item/${item.emp_itemID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteemp_item(item.emp_itemID)}>Delete </button>
                        <Link to={`/viewemp_item/${item.emp_itemID}`}>
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

export default E_I_Contract