import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Equi() {
  return (
    <Container>
      <h1>Chemical equilibrium</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?app=desktop&v=J4WJCYpTYj8"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://m.youtube.com/watch?v=1GiZzCzmO5Q&pp=ygUUY2hlbWljYWwgZXF1aWxpYnJpdW0%3D"
          controls
        />
      </div>
    </Container>
  );
}

export default Equi;
