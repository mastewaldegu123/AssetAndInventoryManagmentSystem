import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  
  categoryname:"",
  listofproduct:"",
  category_description:""
}
function AddEditCategory() {
  const [state,setState]=useState(initialstate)
  const{categoryname,listofproduct,category_description}=state
 
  const navigate=useNavigate()
  const {categoryID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatecategory/${categoryID}`).then((resp)=>setState({...resp.data[0]}))
  },[categoryID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!categoryname||!listofproduct||!category_description){
      alert("please provide the value for each input field");
    }else{
      if(!categoryID){
        axios.post("http://localhost:5000/postcategory",{
          categoryname,listofproduct,category_description
        }).then(()=>{
          setState({categoryname:"",listofproduct:"",category_description:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatecategory/${categoryID}`,{
          
          categoryname,listofproduct,category_description
        }).then(()=>{
          setState({categoryname:"",listofproduct:"",category_description:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/category")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  return (
    <div className='one' style={{marignTop:"100px"}}>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='seven'>
<label  htmlFor="name">CategoryName</label>
<input type="text" id="categoryname" name="categoryname" placeholder='category name...' value={categoryname||""} onChange={handleInputChange}/>
<label htmlFor="email">List of product</label>
<input type="number" id="listofproduct" name="listofproduct" placeholder='listofproduct...' value={listofproduct||""} onChange={handleInputChange}/>
<label htmlFor="contact">Category_Description</label>
<input type="text" id="category_description" name="category_description" placeholder='category_description...' value={category_description||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={categoryID ? "update":"save"}   />
     <Link to="/category">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditCategory