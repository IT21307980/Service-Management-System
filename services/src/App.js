import "./App.css";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom"; //use to create dynamic application
import MainLayout from "./layouts/MainLayout";

function App() {

  const navigate = useNavigate();
  const location = useLocation()


  return (
    <div className="App">
      <MainLayout>
      <h1>Hello {location.state.id} </h1>
      <br />
      <p>Welcome to the Home...</p>
      </MainLayout>
      
      <div className="container mt-5">
      <Button
        style={{ width: "20%", height:"60px", marginBottom: "1rem" }}
        variant="info"
        onClick={() => navigate("/posts")}
      >
        View Services
      </Button>
      </div>
    </div>
  );
}

export default App;
