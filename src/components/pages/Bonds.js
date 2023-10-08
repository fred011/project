import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Bonds() {
  return (
    <Container>
      <h1>Break apart covalent bonds</h1>
      <h2>1st</h2>
      <div className="video">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/9t8CtMgwUUc"
          title="Breaking Covalent Bonds"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowfullscreen
        ></iframe>
      </div>
      <h2>2nd</h2>
      <div className="video">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/S_k0kr2eZSQ"
          title="Introduction to Ionic Bonding and Covalent Bonding"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Bonds;
