import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Electro() {
  return (
    <Container>
      <h1>Electrostatics</h1>
      <h2>1st</h2>
      <div className="video">
        <iframe
          width="744"
          height="418"
          src="https://www.youtube.com/embed/YZHJcQK4Nig"
          title="5 Awesome Static Electricity Experiments for Kids"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h2>2nd</h2>
      <div className="video">
        <iframe
          width="744"
          height="418"
          src="https://www.youtube.com/embed/RuSXy32JagA"
          title="Static Electricity and the Balloon"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h2>3rd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/owla5xPR268?si=bN54xbzRqGu7u82G"
          controls
        />
      </div>
      <h2>4th</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtu.be/EaUAqwdX_9c?si=FideJZcmCbyaO0PR"
          controls
        />
      </div>
    </Container>
  );
}

export default Electro;
