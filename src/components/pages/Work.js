import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Work() {
  return (
    <Container>
    <h1>Work, Energy And Power</h1>

    <h2>1st</h2>
    <div className="video">
      <ReactPlayer
        url="https://youtu.be/_MR1Dp8-F8w"
        controls
      />
    </div>
    <h2>2nd</h2>
    <div className="video">
      <ReactPlayer
        url="https://youtu.be/clnjBYtBccw"
        controls
      />
    </div>
  </Container>
  )
}
