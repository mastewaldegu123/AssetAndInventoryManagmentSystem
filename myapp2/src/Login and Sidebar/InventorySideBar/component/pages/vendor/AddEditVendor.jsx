import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
   
  vendorname:"",
  contactperson_name:"",
  phone:"",
  email:""
}
function AddEditVendor() {
  const [state,setState]=useState(initialstate)
  const{ vendorname, contactperson_name, phone, email}=state
 
  const navigate=useNavigate()
  const {vendorID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatevendor/${vendorID}`).then((resp)=>setState({...resp.data[0]}))
  },[vendorID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!vendorname||!contactperson_name||!phone||!email){
      alert("please provide the value for each input field");
    }else{
      if(!vendorID){
        axios.post("http://localhost:5000/postvendor",{
             vendorname, contactperson_name, phone, email
        }).then(()=>{
          setState({vendorname:"",contactperson_name:"",phone:"",emial:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatevendor/${vendorID}`,{
          
         vendorname, contactperson_name, phone, email
        }).then(()=>{
          setState({vendorname:"",contactperson_name:"",phone:"",email:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/vendor")
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
<label  htmlFor="vendorname">VenodrName</label>
<input type="text" id="vendorname" name="vendorname" placeholder='vendorname ...' value={vendorname||""} onChange={handleInputChange}/>
<label htmlFor="contactperson_name">Contact Person Name</label>
<input type="text" id="contactperson_name" name="contactperson_name" placeholder='contactperson_name...' value={contactperson_name||""} onChange={handleInputChange}/>
<label htmlFor="phone">Phone</label>
<input type="number" id="phone" name="phone" placeholder='phone...' value={phone||""} onChange={handleInputChange}/>
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" placeholder='email...' value={email||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={vendorID ? "update":"save"}   />
     <Link to="/vendor">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditVendor