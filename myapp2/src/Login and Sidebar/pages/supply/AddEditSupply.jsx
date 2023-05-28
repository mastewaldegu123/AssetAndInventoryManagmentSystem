import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  
  categoryname:"",
  listofproduct:"",
  category_description:""
}
function AddEditSupply() {
  const [state,setState]=useState(initialstate)
  const{ supplyType, Supplyingdate, vendorID}=state
 
  const navigate=useNavigate()
  const {supplyID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatesupply/${supplyID}`).then((resp)=>setState({...resp.data[0]}))
  },[supplyID])
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    if(!supplyType||!Supplyingdate||!vendorID){
      alert("please provide the value for each input field");
    }else{
      if(!supplyID){
        axios.post("http://localhost:5000/postsupply",{
           supplyType, Supplyingdate, vendorID
        }).then(()=>{
          setState({supplyType:"",Supplyingdate:"",vendorID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatesupply/${supplyID}`,{
          
       supplyType, Supplyingdate, vendorID
        }).then(()=>{
          setState({supplyType:"",Supplyingdate:"",vendorID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/supply")
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
<label  htmlFor="supplyType">supplyType</label>
<input type="text" id="supplyType" name="supplyType" placeholder='supplyType ...' value={supplyType||""} onChange={handleInputChange}/>
<label htmlFor="Supplyingdate">Supplyingdate</label>
<input type="number" id="Supplyingdate" name="Supplyingdate" placeholder='Supplyingdate...' value={Supplyingdate||""} onChange={handleInputChange}/>
<label htmlFor="vendorID">vendorID</label>
<input type="text" id="vendorID" name="vendorID" placeholder='vendorID...' value={vendorID||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={supplyID ? "update":"save"}   />
     <Link to="/supply">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditSupply