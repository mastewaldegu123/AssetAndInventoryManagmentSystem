import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
 
   department_name:"", 
   department_role:"", 
   number_ofemployee:""
 
}
function AddEditDepartment() {
  const [state,setState]=useState(initialstate)
  const{  department_name, department_role, number_ofemployee}=state
 
  const navigate=useNavigate()
  const {departmentID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatedepartment/${departmentID}`).then((resp)=>setState({...resp.data[0]}))
  },[departmentID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!department_name||!department_role||!number_ofemployee){
      alert("please provide the value for each input field");
    }else{
      if(!departmentID){
        axios.post("http://localhost:5000/postdepartment",{
              department_name, department_role, number_ofemployee
        }).then(()=>{
          setState({department_name:"",department_role:"",number_ofemployee:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatedepartment/${departmentID}`,{
          
         department_name, department_role, number_ofemployee
        }).then(()=>{
          setState({department_name:"",department_role:"",number_ofemployee:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/department")
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
<label  htmlFor="department_name">department_name</label>
<input type="text" id="department_name" name="department_name" placeholder='department_name ...' value={department_name||""} onChange={handleInputChange}/>
<label htmlFor="department_role"> department_role</label>
<input type="text" id="department_role" name="department_role" placeholder='department_role' value={department_role||""} onChange={handleInputChange}/>
<label htmlFor="number_ofemployee">number_ofemployee</label>
<input type="number" id="number_ofemployee" name="number_ofemployee" placeholder='number_ofemployee...' value={number_ofemployee||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={departmentID ? "update":"save"}   />
     <Link to="/department">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditDepartment