import React from "react";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
function Heart() {
  return (
    <Container>
      <h1>Heart made of gallium</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=N6ccRvKKwZQ"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer url="https://youtu.be/E0hDh595Hck" controls />
      </div>
    </Container>
  );
}

export default Heart;
