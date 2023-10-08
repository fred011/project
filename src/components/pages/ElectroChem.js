import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function ElectroChem() {
  return (
    <Container>
      <h1>Electrochemical Reactions</h1>
      <h2>1st</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/watch?v=uvVp57gIj98&si=cbEU7YWTR5t_ES6U"
          controls
        />
      </div>
      <h2>2nd</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/playlist?list=PLOaNAKtW5HLRQK1aa7YxnXNy0ue9aAyi3&si=RTc3biB2Jh_odW61"
          controls
        />
      </div>
    </Container>
  );
}

export default ElectroChem;
