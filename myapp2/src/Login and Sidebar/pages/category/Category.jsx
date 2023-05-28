import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./category.css"
function Category() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/getcategory",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const deleteCategory=(categoryID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletecategory/${categoryID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
  return (
    <div style={{marginTop: "150px"}} > 
    <Link to={"/addcategory"} >
     <button  className='four' >AddCategory</button>
     </Link>
     
<table className='one' >


   <thead className='two'>
    <tr>
    <th  style={{textAlign:"center"}}>No</th> 
       <th  style={{textAlign:"center"}}>categoryname</th> 
       <th style={{textAlign:"center"}}>listofproduct</th> 
       <th style={{textAlign:"center"}}>category_description</th> 
       <th style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='three'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.categoryID}>
                   
                    <th  scope='row'>{index + 1}</th>
                   
                    <td>{item.categoryname}</td>
                    <td>{item.listofproduct}</td>
                    <td>{item.category_description}</td>
                    <td  className='six'>
                        <Link to={`/updatecategory/${item.categoryID}`}>
                        <button className='five' >Edit </button>
                        </Link>
                        <button className='five' onClick={()=>deleteCategory(item.categoryID)}>Delete </button>
                        <Link to={`/viewcategory/${item.categoryID}`}>
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

export default Category