import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Rate() {
  return (
    <Container>
      <h1>Rate and exchange of reaction</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://m.youtube.com/watch?v=Bn5ZGl6iUvs&list=PL-TAdh0NB2OfMXFhbzHq9DdcG434QC3Qk&index=1&pp=iAQB"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?app=desktop&v=SIXw7H2t8yo&pp=ygUkcmF0ZSBhbmQgZXh0ZW50IG9mIHJlYWN0aW9uIGdyYWRlIDEy"
          controls
        />
      </div>
    </Container>
  );
}

export default Rate;
