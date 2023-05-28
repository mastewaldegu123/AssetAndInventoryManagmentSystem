import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Register() {
    const [firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    
   
    const register=()=>{





axios.post("http://localhost:5000/addrerister",{
    firstname: firstname,lastname: lastname,email:email,password:password
}).then(()=>{
    console.log("success")
}

)

}

  return (
    

    
    <div  className='new3'>
      
      <div className='new2'>
            <Link to={"/"}>
    <button className='go2'>Go Back</button>
   </Link>
   </div>
    
    
        <div  className='login'>

            <h3 className='h3'>Register</h3>
            <div className='input'>
    <label >First Name</label>
    <input type="text" onChange={(event)=>{setFirstName(event.target.value)}} />
    <label >Last Name</label>
    <input type="text"  onChange={(event)=>{setLastName(event.target.value)}} />
    <label >Email</label>
    <input type="" onChange={(event)=>{setEmail(event.target.value)}} /> 
    <label >password</label>
    <input type="password" onChange={(event)=>{setPassword(event.target.value)}} /> 

    </div>
</div>
  
<div className='new1'>
       <Link to="/login">
        <button onClick={register} className="go3" >submit</button>
        </Link>
        </div>
    
       
    </div>
        
     
       
    
  )
}

export default Register