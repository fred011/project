import React from "react";
import Navy from "../Navy";
import "../dashboard.css";
import '../Sidebar.css'
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar.jsx";

function Dashboard() {
  const navigate = useNavigate();
  function handleClick(e){
    e.preventDefault();
    navigate('/chemistry')
  }
  function handleClic(e){
    e.preventDefault();
    navigate('/physics')
  }
  return (
    <div >
      <Navy />
      <div>
        <div className="main">
          <SideBar />
          <div className="container">
            <h1 className="title">Experiments</h1>
            <p className="info">Let`s watch Chemistry Experiments Videos</p>
            <button className="btn" onClick={handleClick}>Chemistry</button>
            <p className="info">Let`s perform Physics Experiments </p>
            <button className="btn" onClick={handleClic}>Physics</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
