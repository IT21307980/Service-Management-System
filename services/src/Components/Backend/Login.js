import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {

    const history = useNavigate();

    const [name, setName] = useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(false)

    async function submit(e){
        e.preventDefault();

        if(name.length==0 || email.length ==0 || password.length == 0){
            setError(true)
        }

        else{
        try{
            await axios.post("http://localhost:8000/",{
                name, email, password
            })
            .then(res =>{
                if(res.data=="exist"){
                    history("/home",{state:{id:name}})
                }
                else if(res.data=="not-exist"){
                    alert("User has not signed up")
                    
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
    }}


  return (
    <div className="back-body">
      
      {/* <h1>Login</h1>
      
      <form action='POST'>
      <input type="name" onChange={(e) =>{setName(e.target.value)}} placeholder='User Name' id='' />
        <input type="email" onChange={(e) =>{setEmail(e.target.value)}} placeholder='Email' id='' />
        <input type="password" onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' id='' />

        <input type="submit" onClick={submit} />
      </form>

    <br />
    <p>Or</p> <br/>

    <Link to="/signup">Create an account</Link> */}

<div className="registration-form">
        <form action='POST'>
        <div className="subhead">
            <h2>Admin Login</h2></div>
            <div className="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            <div className="form-group">
            <input type="name" className="form-control item" onChange={(e) =>{setName(e.target.value)}} placeholder='User Name' id='' />
            {error && name.length<=0?
            <label className="error">Enter User Name !!</label>:""}
            </div>
            <div className="form-group">
            <input type="email" className="form-control item" onChange={(e) =>{setEmail(e.target.value)}} placeholder='Email' id='' />
            {error && email.length<=0?
            <label className="error">Fill the field !!</label>:""}
            </div>
            <div className="form-group">
            <input type="password" className="form-control item" onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' id='' />
            {error && password.length<=0?
            <label className="error">Fill the field..!!</label>:""}
            </div>
            
            
            <div className="form-group">
                <button type="submit" onClick={submit} className="btn btn-block create-account float-Right ">Login</button>
            </div>

            <div className="text">
            <h5>or</h5>
                    <p>Don't have an account? </p>
                <a href="#"></a>
                <Link to="/signup" style={{textDecoration:"none"}}><h5>Sign Up</h5></Link>
            
        </div>
    

             
        </form>
       
    </div>
    
    
    </div>
  )
}
