import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  employeeID:"",
  empfname:"",
   emplname:"",
    gender:"",
     emp_Email:"",
      phone:"",
       salary:"",
        dateofhire:"",
         postion:"",
          tittle:"", 
          ManagerID:"",
           departmentID:""
}
function AddEditEmployee() {
  const [state,setState]=useState(initialstate)
  const{employeeID,empfname, emplname, gender, emp_Email, phone, salary, dateofhire, postion, tittle, 
    ManagerID, departmentID}=state
 
  const navigate=useNavigate()
  const {assetID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset/${assetID}`).then((resp)=>setState({...resp.data[0]}))
  },[assetID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!employeeID||!empfname||!emplname||!gender||!emp_Email||!phone||!salary||!dateofhire||!postion||!tittle||!ManagerID||!departmentID){
      alert("please provide the value for each input field");
    }else{
      if(!employeeID){
        axios.post("http://localhost:5000/postasset",{
          employeeID, empfname, emplname, gender, emp_Email, phone, salary, dateofhire, postion, tittle, 
          ManagerID, departmentID
        }).then(()=>{
          setState({employeeID:"",empfname:"",emplname:"",gender:"",emp_Email:"",phone:"",salary:"",dateofhire:"",postion:"",tittle:"",ManagerID:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateasset/${assetID}`,{
          
        employeeID:"", empfname, emplname, gender, emp_Email, phone, salary, dateofhire, postion, tittle, 
        ManagerID, departmentID
        }).then(()=>{
          setState({employeeID:"",empfname:"",emplname:"",gender:"",emp_Email:"",phone:"",salary:"",dateofhire:"",postion:"",tittle:"",ManagerID:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/employee")
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
<label  htmlFor="empfname">empfname</label>
<input type="text" id="empfname" name="empfname" placeholder='empfname ...' value={empfname||""} onChange={handleInputChange}/>
<label htmlFor="emplname">emplname</label>
<input type="text" id="emplname" name="emplname" placeholder='emplname...' value={emplname||""} onChange={handleInputChange}/>
<label htmlFor="gender">gender</label>
<input type="text" id="gender" name="gender" placeholder='gender...' value={gender||""} onChange={handleInputChange}/>
<label htmlFor="emp_Email">emp_Email</label>
<input type="email" id="emp_Email" name="emp_Email" placeholder='emp_Email...' value={emp_Email||""} onChange={handleInputChange}/>
<label htmlFor="phone">phone</label>
<input type="number" id="phone" name="phone" placeholder='phone...' value={phone||""} onChange={handleInputChange}/>
<label htmlFor="salary">salary</label>
<input type="number" id="salary" name="salary" placeholder='salary...' value={salary||""} onChange={handleInputChange}/>
<label htmlFor="dateofhire">dateofhire</label>
<input type="number" id="dateofhire" name="dateofhire" placeholder='dateofhire...' value={dateofhire||""} onChange={handleInputChange}/>
<label htmlFor="postion">postion</label>
<input type="number" id="postion" name="postion" placeholder='postion...' value={postion||""} onChange={handleInputChange}/>
<label htmlFor="tittle">tittle</label>
<input type="number" id="tittle" name="tittle" placeholder='tittle...' value={tittle||""} onChange={handleInputChange}/>
<label htmlFor="ManagerID">ManagerID</label>
<input type="number" id="ManagerID" name="ManagerID" placeholder='ManagerID...' value={ManagerID||""} onChange={handleInputChange}/>
<label htmlFor="departmentID">departmentID</label>
<input type="number" id="departmentID" name="departmentID" placeholder='departmentID...' value={departmentID||""} onChange={handleInputChange}/>
</div>

<div className='eight' >
     <input type="submit" value={employeeID ? "update":"save"}   />
     <Link to="/employee">
      <button className='nine'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditEmployee