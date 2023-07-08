import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CreateService from "./Components/Backend/CreateService";
import Services from "./Components/Backend/Services";
import Login from "./Components/Backend/Login";
import Signup from "./Components/Backend/Signup";
import Report from "./Components/Backend/Report";
import Client from "./Components/Frontend/Client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<App />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/posts" element={<Services />}></Route>
        <Route path="/posts/create" element={<CreateService />}></Route>
        <Route path="/posts/report" element={<Report />}></Route>
        <Route path="/client" element={<Client />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


