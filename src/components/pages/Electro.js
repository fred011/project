import React from 'react'
import ReactPlayer from "react-player";

function Electro() {
  return (
    <div>
      <h2>electrostatics</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://youtu.be/YZHJcQK4Nig?si=InWFcxM_VyVg5qxy"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://youtu.be/RuSXy32JagA?si=7xquoNVE7ZxL1fTu"
            controls
          />
        </div>

      </div>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://youtu.be/owla5xPR268?si=bN54xbzRqGu7u82G"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://youtu.be/EaUAqwdX_9c?si=FideJZcmCbyaO0PR"
            controls
          />
        </div>

      </div>
      
    </div>
  )
}

export default Electro