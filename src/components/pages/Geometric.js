import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Geometric() {
  return (
    <Container>
      <h1>Geometric Optics</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ML7HcZo6IaE"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=k6YYd4vLths"
          controls
        />
      </div>
    </Container>
  );
}

export default Geometric;
