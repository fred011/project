import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Doppler() {
  return (
    <Container>
      <h1>Doppler Effect</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/WiTQxNaKAYA"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/eEdbztoFokg"
          controls
        />
      </div>
    </Container>
  )
}
