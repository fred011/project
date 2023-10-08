import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Paper() {
  return (
    <Container>
      <h1>Boil Water in a paper cup</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer url="https://youtu.be/I9gKzea3Cno" controls />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer url="https://youtu.be/1XncEnsDf1A" controls />
      </div>
    </Container>
  );
}

export default Paper;
