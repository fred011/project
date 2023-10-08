import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Second() {
  return (
   <Container>
    <h1>Newton`s Second Law</h1>
    <div className="video">
      
      <iframe width="691" height="389" src="https://www.youtube.com/embed/Ee6CHn0MRKE" title="Newton&#39;s Second Law of Motion - Force, Mass, &amp; Acceleration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>
    </div>
   </Container>
  );
}

export default Second;
