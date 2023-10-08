import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Oxidation() {
  return (
    <Container>
      <h1>Oxidation and Reduction Reactions</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/dF5lB7gRtcA"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/HFgcCTCj1J4"
          controls
        />
      </div>
    </Container>
  )
}
