import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./asset.css"
function Asset_return() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getasset_return",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteAsset_return=(asset_returnID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteasset_return/${asset_returnID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addasset_return"} >
     <button  className='four' >AddAsset_Return</button>
     </Link>
    
<table className='one' >
   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>Purpose_returned</th> 
       <th style={{textAlign:"center"}}>Purpose_returned</th> 
       <th style={{textAlign:"center"}}>emp_itemID</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.asset_returnedID}>
                  
                    <th  scope='row'>{index + 1}</th>
                   
                    <td>{item.Purpose_returned}</td>
                    <td>{item.Purpose_returned}</td>
                    <td>{item.emp_itemID}</td>
                    <td  className='six'>
                        <Link to={`/updaterequest/${item.asset_returnedID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteAsset_return(item.asset_returnedID)}>Delete </button>
                        <Link to={`/viewasset_return/${item.asset_returnedID}`}>
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

export default Asset_return