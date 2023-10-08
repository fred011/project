import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Hot() {
  return (
    <Container>
      <h1>Hot Ice</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=rM1yu1kDPYY"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer url="https://youtu.be/pzHiVGeevZE" controls />
      </div>
    </Container>
  );
}

export default Hot;
