import React from "react";
import ReactPlayer from "react-player";
import { Container} from 'react-bootstrap'
import '../Videos.css'

function First() {
  return (
    <Container>
      <h2>Newton's First Law</h2>
      <div className="video">
      <iframe width="864" height="486" src="https://www.youtube.com/embed/1XSyyjcEHo0" title="Newton&#39;s First Law of Motion: Mass and Inertia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  " allowFullScreen></iframe>
      
    </div>
    </Container>
    
  );
}

export default First;
