import React from 'react'
import ReactPlayer from 'react-player'

function Bonds() {
  return (
    <div>
      <h2>Break apart covalent bonds</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer url="https://www.youtube.com/watch?v=9t8CtMgwUUc" controls/>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=S_k0kr2eZSQ" controls/>
        </div>
      </div>
    </div>
  )
}

export default Bonds