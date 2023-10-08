import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Acids() {
  return (
    <Container>
      <h1>Acids And Bases</h1>
      <h2>1st</h2>
      <div className="video">
        <iframe
          width="866"
          height="487"
          src="https://www.youtube.com/embed/FM2MpMbV0rw"
          title="Acids and Bases - Basic Introduction - Chemistry"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowfullscreen
        ></iframe>
      </div>
      <h2>2nd</h2>
      <div className="video">
        <iframe
          width="866"
          height="487"
          src="https://www.youtube.com/embed/owVZiKnnPME"
          title="Acids and Bases - Basic Introduction - Organic Chemistry"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowfullscreen
        ></iframe>
      </div>

      <h2>3rd</h2>
      <div className="video">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/AaYQ_ZiE7AY"
          title="How To Memorize The Strong Acids and Strong Bases"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
      </div>
      <h2>4th</h2>
      <div className="video">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/kJTCuRSeh6g"
          title="pH of Weak Acids and Bases - Percent Ionization - Ka &amp; Kb"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Acids;
