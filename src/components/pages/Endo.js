import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

function Endo() {
  return (
    <Container>
      <h1>Endo/Exothermic Reactions</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dstRL5xB0Sk"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JRIm_a2LDPM"
          controls
        />
      </div>
    </Container>
  );
}

export default Endo;
