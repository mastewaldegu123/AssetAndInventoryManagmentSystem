import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./request.css"
function Request() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getrequest",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteRequest=(categoryID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleterequest/${requestNO}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addrequest"} >
     <button  className='four' >AddRequest</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
   
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>requesterID</th> 
       <th style={{textAlign:"center"}}>quantity</th> 
       <th style={{textAlign:"center"}}>unit</th> 
       <th style={{textAlign:"center"}}> price</th> 
       <th style={{textAlign:"center"}}> approvedby</th> 
       <th style={{textAlign:"center"}}> recievedby</th> 
       <th style={{textAlign:"center"}}> productID</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
            
                <tr key={item.requestNo}>
                   
                    <th  scope='row'>{index + 1}</th>
                   
                    <td>{item.requesterID}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit}</td>
                    <td>{item.price}</td>
                    <td>{item.approvedby}</td>
                    <td>{item.recievedby}</td>
                    <td>{item.productID}</td>
                    <td  className='six'>
                        <Link to={`/updaterequest/${item.requestNo}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteRequest(item.requestNo)}>Delete </button>
                        <Link to={`/viewrequest/${item.requestNo}`}>
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

export default Request