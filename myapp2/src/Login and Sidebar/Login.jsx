import React,{useState,useEffect} from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import axios from "axios"

function Login() {
    const [firstname,setFirstName]=useState("")
   
    const [password,setpassword]=useState("")
    const [logger,setLogger]=useState("")
      const navigate =useNavigate()
const login=()=>{
  axios.post("http://localhost:5000/login",{
    firstname: firstname,password:password
}).then((response)=>{
  if(response.data.message){
    setLogger(response.data.message)
  }else{
    setLogger(response.data[0].firstname)
  };setTimeout(()=>{
    navigate("/sidebar")
  },500)
   
} )
}

  return (
    <div  className='new3'>
      
    <div className='new2'>
          <Link to={"/"}>   
  <button className='go2'>Go Back</button>
 </Link>
 </div>
        <div  className='login'>
            <h3 className='h3'>Login</h3>
            <div className='input'>
    <label >First Name</label>
    <input type="text" onChange={(event)=>{setFirstName(event.target.value)}} />
   
    <label >password</label>
    <input type="password" onChange={(event)=>{setpassword(event.target.value)}} /> 
    </div>
  </div>
    
        <div className='new1' >
        <button onClick={login} className="go3">Login</button>
        </div>
     
     <h3>{logger}</h3>
    </div>
  )
}

export default Login