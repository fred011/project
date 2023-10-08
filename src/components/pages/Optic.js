import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Optic() {
  return (
    <Container>
      <h1>Optical Phenomena and properties of materials</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=o8gapa8ibK0"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8ZoiKkepfrM"
          controls
        />
      </div>
      <h2>3rd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8ZoiKkepfrM"
          controls
        />
      </div>
    </Container>
  );
}

export default Optic;
