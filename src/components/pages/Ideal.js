import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Ideal() {
  return (
    <Container>
      <h1>Ideal Gases</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/b_CrNjlayx4?si=zZD0ZTWHl8OiiQoN"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/Xd6br_U5gzs?si=KVL1xVfLY0_0FAzT"
          controls
        />
      </div>
      <h2>3rd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/GY9KfoQAxpA?si=DN97AgTkEpmltPMY"
          controls
        />
      </div>
    </Container>
  );
}

export default Ideal;
