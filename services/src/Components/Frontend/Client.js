import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Client.css";
import MainLayout from '../../layouts/MainLayout';

export default function Client() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get respose from data under data category
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div>
      <MainLayout>
        <h2>Services</h2>
      </MainLayout>

    
{/* -------------------- Hair Category----------------------------------------------------------------- */}
    
<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Hair</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>

      {posts
      .map((post) => (
        <p>{post.sName}</p>
      ))}


           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>
{/* ----------------------------Skin category--------------------------------------------------------- */}

<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Facial</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>
{/* ----------------------------Body Category--------------------------------------------------------- */}

<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Body</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>
{/* -----------------------------Nail Category-------------------------------------------------------- */}


<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Nail</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>

{/* ------------------------------Bridal Category------------------------------------------------------- */}

<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Bridal</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>
{/* --------------------------Kids Category----------------------------------------------------------- */}
<div className='container mt-3 '>
                <div className='bg-light p-3 mt-4 rounded-3'>
                    <h3>Kids</h3>
                </div>
                
      <div className='d-flex justify-content-evenly'>
           <div className='group-1'>
           <h5>Female</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>

           <div className='group-2 '>
           <h5>Male</h5>
           <div className="content">
                <p>Hair Cut</p>
                <p>Hair Colouring</p>
           </div>


           </div>
      </div>

     
    </div>
{/* ------------------------------------------------------------------------------------- */}
      


    </div>
  )
}
