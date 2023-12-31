import React from "react";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";

function Rainbow() {
  return (
    <Container>
      <h1>Rainbow Flames</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer url="https://youtu.be/p2XIMKX3ktg" controls />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=TOyDzOc2AaI"
          controls
        />
      </div>
    </Container>
  );
}

export default Rainbow;
