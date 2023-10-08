import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Third() {
  return (
    <Container>
      <h1>Newton`s Third Law</h1>
    <div className="video">
      
      <iframe width="640" height="360" src="https://www.youtube.com/embed/TxhESW6YtOg" title="Newton&#39;s Third Law of Motion - Action and Reaction Forces" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
       </div>
       </Container>
  );
}

export default Third;
