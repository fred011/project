import React from 'react'
import ReactPlayer from "react-player";

function Ideal() {
  return (
    <div>
      <h2>Ideal Gases</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://youtu.be/b_CrNjlayx4?si=zZD0ZTWHl8OiiQoN"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://youtu.be/Xd6br_U5gzs?si=KVL1xVfLY0_0FAzT"
            controls
          />
        </div>
      </div>
      <div>
          <ReactPlayer
            url="https://youtu.be/GY9KfoQAxpA?si=DN97AgTkEpmltPMY"
            controls
          />
        </div>
    </div>
  )
}

export default Ideal