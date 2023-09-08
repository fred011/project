import React from "react";
import ReactPlayer from "react-player";
import "../Exp.css";
import { useNavigate } from "react-router-dom";

function Hot() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/CarCollisionSimulation");
  }
  return (
    <div className="col">
      <h2>Momentum</h2>
      <div className="del">
      <div className="red">
        <div className="space">
          <ReactPlayer url="https://www.youtube.com/watch?v=F8DnNqBhUfQ" controls/>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=ZU6rJQTz7FI" controls/>
        </div>
      </div>

      <div >
        <ReactPlayer url="https://www.youtube.com/watch?v=NIVNfI0RN2k" controls/>
      </div>
      </div>
      {/* <div className="bt">
        <button className="bttn" onClick={handleClick}>
          Simulate
        </button>
      </div> */}
    </div>
  );
}

export default Hot;
