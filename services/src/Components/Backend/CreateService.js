import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";


function CreateService() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    sId: "",
    sName: "",
    sPrice: "",
    sCategory:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; //handleChange function is use to get input value

    setPost((prev) => {
      return {
        ...prev,
        [name]: value, //save the values and change the next value
      };
    });
  };


  const handleClick = (event) => {
    event.preventDefault();

    //give last part of url insted of the whole URL and send the other part to package.json
    //send data to database using post method
    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/posts");
  };

  return (
    <div >
      <MainLayout>
      <h1>Add a Service</h1>
      </MainLayout>

    <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
     
      <Form className="container mt-3">
        <Form.Group className="mb-3">
          <Form.Control
            name="sId" //------------------------Change---------------------------
            value={post.sId} //according to CreatePost state
            placeholder="Enter Service ID"
            
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="sName" //------------------------Change---------------------------
            value={post.sName}
            placeholder="Enter Service Name"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        </Form.Group>

<Form.Group>
        <Form.Control
            name="sPrice" //------------------------Change---------------------------
            value={post.sPrice}
            placeholder="Enter Price"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          
        

          <div className="mb-3">
                <select className="form-select form-select-sm" name="sCategory"
                value={post.sCategory} onChange={handleChange}
                >
                    <option selected>Select the Category</option>
                    <option value="Hair">Hair</option>
                    <option value="Skin">Skin</option>
                    <option value="Body">Body</option>
                    <option value="Nail">Nail</option>
                    <option value="Kids">Kids</option>
                    <option value="Bridal">Bridal</option>
                </select>
            </div> &nbsp;


        </Form.Group>

        <Button
        
          style={{ width: "100%", marginBottom: "1rem" }}
          variant="outline-success"
          onClick={handleClick}
        >
          CREATE SERVICE
        </Button>
      
      
      <Button
        style={{ width: "100%", marginBottom: "1rem" }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        BACK
      </Button> 
      </Form>
      
      
    </div> </div> //to navigate backward
    


    
  );
}

export default CreateService;
