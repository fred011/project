import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Wavefront() {
  return (
    <Container>
      <h1>Wavefronts</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=FpTFU4Yh7gQ"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=yS4CmfSLYms"
          controls
        />
      </div>
    </Container>
  );
}

export default Wavefront;
