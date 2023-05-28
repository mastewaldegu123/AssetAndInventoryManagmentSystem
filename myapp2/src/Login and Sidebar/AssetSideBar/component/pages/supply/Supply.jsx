import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./supply.css"
function Supply() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getsupply",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteSupply=(supplyID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletesupply/${supplyID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addsupply"} >
     <button  className='four' >AddSupply</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
   
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>supplyType</th> 
       <th style={{textAlign:"center"}}>Supplyingdate</th> 
       <th style={{textAlign:"center"}}>vendorID</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.supplyID}>
                   
                    <th  scope='row'>{index + 1}</th>
                    
                    <td>{item.supplyType}</td>
                    <td>{item.Supplyingdate}</td>
                    <td>{item.vendorID}</td>
                    <td  className='six'>
                        <Link to={`/updatesupply/${item.supplyID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteSupply(item.supplyID)}>Delete </button>
                        <Link to={`/viewsupply/${item.supplyID}`}>
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

export default Supply