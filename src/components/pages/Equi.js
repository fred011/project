import React from "react";
import ReactPlayer from "react-player";

function Equi() {
  return (
    <div>
      <h2>Chemical equilibrium</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://www.youtube.com/watch?app=desktop&v=J4WJCYpTYj8"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://m.youtube.com/watch?v=1GiZzCzmO5Q&pp=ygUUY2hlbWljYWwgZXF1aWxpYnJpdW0%3D"
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default Equi;
