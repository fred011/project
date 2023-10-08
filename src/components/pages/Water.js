import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Water() {
  return (
    <Container>
      <h1>Water and Alkali Metals</h1>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=1XncEnsDf1A"
          controls
        />
      </div>
    </Container>
  );
}

export default Water;
