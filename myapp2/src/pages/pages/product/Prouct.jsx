import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./product.css"
function Product() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getproduct",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteProduct=(productID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteproduct/${productID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addproduct"} >
     <button  className='four' >Add Product</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>productname</th> 
       <th style={{textAlign:"center"}}>product_description</th> 
       <th style={{textAlign:"center"}}>categoryID</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.productID}>
                   
                    <th  scope='row'>{index + 1}</th>
                   
                    <td>{item.productname}</td>
                    <td>{item.product_description}</td>
                    <td>{item.categoryID}</td>
                    <td  className='six'>
                        <Link to={`/updateproduct/${item.productID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteProduct(item.productID)}>Delete </button>
                        <Link to={`/viewproduct/${item.productID}`}>
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

export default Product