import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  requestNo:"",
   requesterID:"", 
   quantity:"", 
   unit:"",
    price:"", 
    approvedby:"", 
    recievedby:"", 
    productID:""
  
}
function AddEditCategory() {
  const [state,setState]=useState(initialstate)
  const{ requesterID, quantity, unit, price, approvedby, recievedby, productID}=state
 
  const navigate=useNavigate()
  const {requestNo}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updaterequest/${requestNo}`).then((resp)=>setState({...resp.data[0]}))
  },[requestNo])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!requesterID||!quantity||!unit||!price||!approvedby||!recievedby||!productID){
      alert("please provide the value for each input field");
    }else{
      if(!requestNo){
        axios.post("http://localhost:5000/postrequest",{
           requesterID, quantity, unit, price, approvedby, recievedby, productID
        }).then(()=>{
          setState({requesterID:"",quantity:"",unit:"",price:"",approvedby:"",recievedby:"",productID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatecategory/${requestNo}`,{
          
        requesterID, quantity, unit, price, approvedby, recievedby, productID
        }).then(()=>{
          setState({requesterID:"",quantity:"",unit:"",price:"",approvedby:"",recievedby:"",productID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/request")
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
<label  htmlFor="requesterID">requesterID</label>
<input type="number" id="requesterID" name="requesterID" placeholder='requesterID ...' value={requesterID||""} onChange={handleInputChange}/>
<label htmlFor="quantity">quantity</label>
<input type="number" id="quantity" name="quantity" placeholder='quantity...' value={quantity||""} onChange={handleInputChange}/>
<label htmlFor="unit">unit</label>
<input type="number" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label htmlFor="price">price</label>
<input type="number" id="price" name="price" placeholder='price...' value={price||""} onChange={handleInputChange}/>
<label htmlFor="approvedby">approvedby</label>
<input type="number" id="approvedby" name="approvedby" placeholder='approvedby...' value={approvedby||""} onChange={handleInputChange}/>
<label htmlFor="recievedby">recievedby</label>
<input type="number" id="recievedby" name="recievedby" placeholder='recievedby...' value={recievedby||""} onChange={handleInputChange}/>
<label htmlFor="productID">productID</label>
<input type="number" id="productID" name="productID" placeholder='productID...' value={productID||""} onChange={handleInputChange}/>




</div>


<div className='eight' >
     <input type="submit" value={requestNo? "update":"save"}   />
     <Link to="/request">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditCategory