import React, { useState } from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  const[state,setState]=useState("Login");
  const[formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const login = async ()=>{
    console.log("Login Function executed",formData);
    let responseData;
    await fetch('http://localhost:1001/login',{
      method:'POST',
      headers:{
        Accept:'application/form-Data',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    console.log("Signup Function executed",formData);
    let responseData;
    await fetch('http://localhost:1001/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-Data',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="login-signupfeilds">
        {state==="Signup"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Name'/>:<></>} 
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {
          state==="Signup"?<p className='loginsignup-login'>Alreaday have an account?<span onClick={()=>{setState("Login")}}> Login Here</span> </p>
          : <p className='loginsignup-login'>Create Account?<span onClick={()=>{setState("Signup")}}> Click Here</span> </p>
          }
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>I am agree for terms & condition</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
