import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";

export default function Circuit() {
  return (
    <Container>
      <h1>Endo/Exothermic Reactions</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/r-SCyD7f_zI"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/7mdc-lRrW1c"
          controls
        />
      </div>
    </Container>
  )
}
