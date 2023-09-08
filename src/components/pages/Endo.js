import React from 'react'
import ReactPlayer from "react-player/youtube";

function Endo() {
  return (
    <div>
      <h2>Endo/Exothermic Reactions</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer url="https://www.youtube.com/watch?v=dstRL5xB0Sk"  controls/>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=JRIm_a2LDPM" controls/>
        </div>
      </div>
    </div>
  )
}

export default Endo