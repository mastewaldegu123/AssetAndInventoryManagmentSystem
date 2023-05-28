import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  
     Purpose:"",
      asset_type:"",
       dateofcontract:"", 
       assetID:"", 
       employeeID:"", 
       requestNo:""
}
function AddEditE_I_Contract() {
  const [state,setState]=useState(initialstate)
  const{ Purpose, asset_type, dateofcontract, assetID, employeeID, requestNo}=state
 
  const navigate=useNavigate()
  const {emp_itemID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemp_item/${emp_itemID}`).then((resp)=>setState({...resp.data[0]}))
  },[emp_itemID])
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    if(!Purpose||!asset_type||!dateofcontract||!assetID||!employeeID||!requestNo){
      alert("please provide the value for each input field");
    }else{
      if(!emp_itemID){
        axios.post("http://localhost:5000/postemp_item",{
             Purpose, asset_type, dateofcontract, assetID, employeeID, requestNo
        }).then(()=>{
          setState({Purpose:"",asset_type:"",dateofcontract:"",assetID:"",employeeID:"",requestNo:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateemp_item/${assetID}`,{
          
        Purpose, asset_type, dateofcontract, assetID, employeeID, requestNo
        }).then(()=>{
          setState({Purpose:"",asset_type:"",dateofcontract:"",assetID:"",employeeID:"",requestNo:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/emp_item")
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
<label  htmlFor="Purpose">Purpose</label>
<input type="text" id="Purpose" name="Purpose" placeholder='Purpose...' value={Purpose||""} onChange={handleInputChange}/>
<label htmlFor="asset_type">asset_type</label>
<input type="text" id="asset_type" name="asset_type" placeholder='asset_type...' value={asset_type||""} onChange={handleInputChange}/>
<label htmlFor="dateofcontract">dateofcontract</label>
<input type="date" id="dateofcontract" name="dateofcontract" placeholder='dateofcontract...' value={dateofcontract||""} onChange={handleInputChange}/>
<label  htmlFor="assetID">assetID</label>
<input type="text" id="assetID" name="assetID" placeholder='assetID...' value={assetID||""} onChange={handleInputChange}/>
<label  htmlFor="employeeID">employeeID</label>
<input type="number" id="employeeID" name="employeeID" placeholder='employeeID...' value={employeeID||""} onChange={handleInputChange}/>

</div>

<div className='eight' >
     <input type="submit" value={emp_itemID ? "update":"save"}   />
     <Link to="/emp_item">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditE_I_Contract