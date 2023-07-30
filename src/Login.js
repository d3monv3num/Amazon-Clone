import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {auth} from './firebase_config';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const SignIn=(e)=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')
    })
    .catch(
      err=>alert(err.message)
    )
  }
  const register=(e)=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log("success",auth)
      if(auth){
        navigate('/');
      }
    })
    .catch((err)=>{
      alert(err.message);
    })
  }
  return (
    <div className='login'>
      <Link to='/'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='true' className='login_logo'/>
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='mail' value={email} onChange={e=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
          <button type='submit' onClick={SignIn} className='login_signInButton'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type='submit' onClick={register} className='login_registerButton'>Create Account</button>
      </div>
    </div>
    
  )
}

export default Login
