import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Home() {
  return (
<div className='home'>
    
    <h1 className='title'>WellCome To Plan International</h1>
    <div className="whole">
        <Link to={"/login"}>
    <button className='button'>Login</button>
    </Link>
    <div className='new'>
    <p >Don't have an account?</p>
    <Link to={"/register"} >sign in</Link>
    </div>
    </div>
   
    

    </div>
  )
}

export default Home