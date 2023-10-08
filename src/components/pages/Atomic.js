import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Atomic() {
  return (
    <Container>
      <h1>Atomic Combinations</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/fcb8nbwkaR0"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/7es9FYR_Vjk"
          controls
        />
      </div>
    </Container>
  )
}
