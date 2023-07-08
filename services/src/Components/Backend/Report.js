import React from 'react';
import { useEffect, useState, useRef } from "react"; //for get all the data from database
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import Posts from './Services';


export default function Report() {

    const [posts, setPosts] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({});

    useEffect(() => {
        axios
          .get("/posts")
          .then((res) => {
            console.log(res);
            setPosts(res.data); //get respose from data under data category
          })
          .catch((err) => console.log(err));
      }, []);


  // Creating Printing function
 const componentPDF = useRef();
 const generatePDF = useReactToPrint({
  content: ()=> componentPDF.current,
  documentTitle: "Available Services - Isuru Salon",
  onAfterPrint:()=>alert("Data saved in PDF")
 });




 return (
    <div>
          <div className="container mt-3  p-3 mt-4 rounded-3"> 
         <div className="d-grid d-md-flex justify-content-md-end mb-3 ">
                <button className="btn btn-success " onClick={generatePDF}>Print Report</button>
        </div></div>

         <div ref={componentPDF} style={{width:'100%'}} >
        <div className="container mt-3 bg-light p-3 mt-4 rounded-3">  
            <h1>Available Services</h1></div>

    
    <div className="container mt-3 bg-light p-3 mt-4 rounded-3">
    <table className="table  table-hover">
              <thead>
                <tr>
                  <th scope="col">Service ID</th>
                  <th scope="col">Servie Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  
                </tr>
              </thead> 
              <tbody>
                {posts.map((item) =>(
                    <tr>
                        <td>{item.sId}</td>
                        <td>{item.sName}</td>
                        <td>{item.sPrice}</td>
                        <td>{item.sCategory}</td>
                    </tr>
                )) }
              
                </tbody>
              </table>
    


    </div></div>
</div>
  )
}
