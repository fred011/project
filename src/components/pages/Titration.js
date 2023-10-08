import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";


export default function Titration() {
  return (
    <Container>
      <h1>Titration</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/HJvALCcKYAc"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/LNG9rhmBu8E"
          controls
        />
      </div>
    </Container>
  )
}
