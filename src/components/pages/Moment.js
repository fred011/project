import React from "react";
import ReactPlayer from "react-player";
import "../Exp.css";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function Hot() {
  return (
    <Container>
      <h1>Momentum</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=F8DnNqBhUfQ"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ZU6rJQTz7FI"
          controls
        />
      </div>

      <h2>3rd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=NIVNfI0RN2k"
          controls
        />
      </div>
    </Container>
  );
}

export default Hot;
