import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./vendor.css"
function Vendor() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getvendor",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteVendor=(vendorID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletevendor/${vendorID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addvendor"} >
     <button  className='four' >AddVendor</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>vendorname</th> 
       <th style={{textAlign:"center"}}>contactperson_name</th> 
       <th style={{textAlign:"center"}}>phone</th> 
       <th style={{textAlign:"center"}}>email</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
            
                <tr key={item.venodrID}>
                   
                    <th  scope='row'>{index + 1}</th>
                   
                    <td>{item.vendorname}</td>
                    <td>{item.contactperson_name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td  className='six'>
                        <Link to={`/updatevendor/${item.vendorID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteVendor(item.vendorID)}>Delete </button>
                        <Link to={`/viewvendor/${item.vendorID}`}>
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

export default Vendor