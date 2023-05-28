import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./asset.css"
function Asset() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getasset",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteAsset=(assetID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteasset/${assetID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addasset"} >
     <button  className='four' >AddAsset</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>seralNO</th> 
       <th style={{textAlign:"center"}}>qunatity</th> 
       <th style={{textAlign:"center"}}>unit</th> 
       <th style={{textAlign:"center"}}>asset_Price</th> 
       <th style={{textAlign:"center"}}>available_in_store</th> 
       <th style={{textAlign:"center"}}>date</th> 
       <th style={{textAlign:"center"}}>productID</th> 
       <th style={{textAlign:"center"}}>supplyID</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.assetID}>
                   
                    <th  scope='row'>{index + 1}</th>
                    <td>{item.seralNO}</td>categoryname
                    <td>{item.qunatity}</td>
                    <td>{item.unit}</td>
                    <td>{item.asset_Price}</td>
                    <td>{item.available_in_store}</td>
                    <td>{item.date}</td>
                    <td>{item.productID}</td>
                    <td>{item.supplyID}</td>
                    <td  className='six'>
                        <Link to={`/updateasset/${item.assetID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteAsset(item.assetID)}>Delete </button>
                        <Link to={`/viewasset/${item.assetID}`}>
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

export default Asset