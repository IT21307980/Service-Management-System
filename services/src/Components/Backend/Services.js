import { useEffect, useState, useRef } from "react"; //for get all the data from database
import axios from "axios";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";

//create page for show the inputs
function Posts() {
  
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get respose from data under data category
      })
      .catch((err) => console.log(err));
  }, []);

  //after click delete button
  const deletePost = (id) => {
    //console.log(id);
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload(); // for reload the page after delete
  };

  const updatePosts = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    //we use e for event word or we can use event word
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      //set updated post to previous input
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  //Creating search function
  const [search, setSearch] = useState('');
  console.log(search);

  //Sorting function
  const [order, setOrder] = useState("ASC");
  const sorting = (col) =>{
    if(order ==="ASC"){
      const sorted = [...posts].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

          setPosts(sorted);
          setOrder("DESC");
    }
    if(order ==="DESC"){
      const sorted = [...posts].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

          setPosts(sorted);
          setOrder("ASC");
    }
  }


  return (
    <div>
    <MainLayout>
    <h1>Available Services</h1>
      </MainLayout>

      
     
    <div style={{ width: "50%", textAlign: "center", margin: "auto auto" }}>
         
      
      <div className="input-group mb-3 mt-2">
  <input type="text" className="form-control" placeholder="Search Service..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setSearch(e.target.value)}></input>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div></div>

  <div className="container mt-3  p-3 mt-4 rounded-3"> 
          <div className="d-grid d-md-flex justify-content-md-end mb-3 ">
                <button className="btn btn-success " onClick={() => navigate("/posts/report")}>Generate Report</button> &nbsp;
                <button className="btn btn-primary " type="submit" onClick={() => navigate("/posts/create")}>Add New Service</button>
        </div>
  
  </div>

    

 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Service ID"
                name="sId"
                value={updatedPost.sId ? updatedPost.sId : ""}
                onChange={handleChange}
              />{" "}
              {/*if updatedPost.title avaliable return that
                                                                                        if not return nothing */}
              <Form.Control
                name="sName"
                value={updatedPost.sName ? updatedPost.sName : ""}
                placeholder="Service Name"
                onChange={handleChange}
              /><br></br>

              <Form.Control
                name="sPrice"
                value={updatedPost.sPrice ? updatedPost.sPrice : ""}
                placeholder="Enter New Price"
                onChange={handleChange}
              /><br></br>

              <div className="mb-3">
                <select className="form-select form-select-sm" name="sCategory" onChange={handleChange}

                
                >
                    <option selected>Select</option>
                    <option value="Hair">Hair</option>
                    <option value="Skin">Skin</option>
                    <option value="Body">Body</option>
                    <option value="Nail">Nail</option>
                    <option value="Kids">Kids</option>
                    <option value="Bridal">Bridal</option>
                </select>
            </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">

                    <div>
                      
                    <table className="table  table-hover">
              <thead>
                <tr>
                  <th scope="col" onClick={()=>sorting("sId")} >Service ID</th>
                  <th scope="col" onClick={()=>sorting("sName")}>Servie Name</th>
                  <th scope="col"onClick={()=>sorting("sPrice")}>Price</th>
                  <th scope="col"onClick={()=>sorting("sCategory")}>Category</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead> 
              <tbody>
              {posts
              .filter((post) => {
                return search.toLocaleLowerCase() === '' ? post : post.sName. 
                toLowerCase().includes(search.toLowerCase());

})
              .map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.sId}</th>
                <td>{post.sName}</td>
                <td>{post.sPrice}</td>
                <td>{post.sCategory}</td>
                <td>
                 
                  <button type="button" className="btn btn-outline-info" onClick={() => updatePosts(post)}  >Update</button> &nbsp;
                  <button type="button" className="btn btn-outline-danger" onClick={() => deletePost(post._id)} >Delete</button>
                  </td>
                </tr>
                ))}

                </tbody>

              </table>
              </div>

              
                    </div>


                    
      </div>  
      
      



          
    
  );
}

export default Posts;
