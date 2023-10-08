import React from 'react'
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Vertical() {
  return (
    <Container>
      <h1>Vertical Projectile</h1>

      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/awGP4g34dlc"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/zwLiNgt9aPc"
          controls
        />
      </div>
      <h2>3rd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/jWl1TgLj9JY"
          controls
        />
      </div>
    </Container>
  )
}
