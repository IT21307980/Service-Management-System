import "./Signup.css";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


export default function Signup() {

    const history = useNavigate();

    const [name, setName] = useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')


    async function submit(e){
        e.preventDefault();

        if(name.length ==0 || email.length==0){
            setError(true)
        }else {

        const passReq = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/'
        if(password === ""){
            setMessage("Please enter password")
        } 
        else if(!passReq.test(password)){
            setMessage("Invalid Password !")
        }
        else if (passReq.test(password)){
            setMessage("Valid Password !!")

        try{
            await axios.post("/signup",{
                name, email, password
            })
            .then(res =>{
                if(res.data=="exist"){
                    alert("User already exists !!")
                    
                }
                else if(res.data=="not-exist"){
                    alert("Account created..!!")
                    history("/",{state:{id:name}})
                    
                }
                
            })
            .catch(e=>{
                 alert("Wrong details")
                 console.log(e);   
            })
        }
        catch(e){
            console.log(e);
        }
    }}}


  return (
    <div className="back-body">
      
      {/* <h1>Sign Up</h1>
      
      <form action='POST'>
        <input type="name" onChange={(e) =>{setName(e.target.value)}} placeholder='User Name' id='' />
        <input type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder='Email' id='' />
        <input type="password" onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' id='' />

        <input type="submit" onClick={submit} />
      </form>

    <br />
    <p>Or</p> <br/>

    <Link to="/">Login</Link> */}


<div className="registration-form">
        <form action='POST'>
            <div className="subhead">
            <h2>Create an Account</h2></div>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className="form-group">
            <input type="name" className="form-control item" onChange={(e) =>{setName(e.target.value)}} placeholder='User Name' id='' />
            {error && name.length<=0?
            <label className="error">User Name cannot be empty !!</label>:""}
            </div>
            

            <div className="form-group">
            <input type="email" className="form-control item" onChange={(e) =>{setEmail(e.target.value)}} placeholder='Email' id='' />
            {error && email.length<=0?
            <label className="error">Email cannot be empty !!</label>:""}
            </div>
            

            <div className="form-group">
            <input type="password" className="form-control item" onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' id='' />
            {error && password.length<=0?
            <label className="error">Password cannot be empty !!</label>:""}
            <p className="error">{message}</p>
            </div>
            
            
            
            <div className="form-group">
                <button type="submit" onClick={submit} className="btn btn-block create-account">Create Account</button>
            </div>

            <div className="text">
            <h5>or</h5>
            <p>Already have an account? </p>
                
                <Link to="/" style={{textDecoration:'none'}}><h5>Login</h5></Link>
            
        </div>
    

             
        </form>
       
    </div>

    
    
    </div>
  )
}
