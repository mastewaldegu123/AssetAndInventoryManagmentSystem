import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
   Purpose_returned:"", 
   Date_returned:"",
   emp_itemID:""
  
}
function AddEditAsset_returned() {
  const [state,setState]=useState(initialstate)
  const{ Purpose_returned, Date_returned, emp_itemID}=state
  
  const navigate=useNavigate()
  const {asset_returnedID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset_return/${asset_returnedID}`).then((resp)=>setState({...resp.data[0]}))
  },[asset_returnedID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!Purpose_returned||!Date_returned||!emp_itemID){
      alert("please provide the value for each input field");
    }else{
      if(!asset_returnedID){                                                                                                                                                                                                                       
        axios.post("http://localhost:5000/postasset_returned",{
          asset_returnedID, Purpose_returned, Date_returned, emp_itemID
        }).then(()=>{
          setState({Purpose_returned:"",Date_returned:"",emp_itemID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateasset_return/${asset_returnedID}`,{
          
         Purpose_returned, Date_returned, emp_itemID
        }).then(()=>{
          setState({Purpose_returned:"",Date_returned:"",emp_itemID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/asset_return")
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
      >asset_returnedID, Purpose_returned, Date_returned, emp_itemID
        <div className='seven'>
<label  htmlFor="Purpose_returned">Purpose_returned</label>
<input type="text" id="Purpose_returned" name="Purpose_returned" placeholder='Purpose_returned ...' value={Purpose_returned||""} onChange={handleInputChange}/>
<label htmlFor="Date_returned">Date_returned</label>
<input type="date" id="Date_returned" name="Date_returned" placeholder='Date_returned...' value={Date_returned||""} onChange={handleInputChange}/>
<label htmlFor="emp_itemID">emp_itemID</label>
<input type="number" id="emp_itemID" name="emp_itemID" placeholder='emp_itemID...' value={emp_itemID||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={asset_returnedID? "update":"save"}   />
     <Link to="/asset_returned">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditAsset_returned
