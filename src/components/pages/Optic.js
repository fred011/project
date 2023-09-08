import React from 'react'
import ReactPlayer from 'react-player'

function Optic() {
  return (
    <div>
      <h2>Optical Phenomena and properties of materials</h2>
      <div className='del'>
      <div className="red">
        <div className="space">
          <ReactPlayer url="https://www.youtube.com/watch?v=o8gapa8ibK0" controls/>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=8ZoiKkepfrM" controls/>
        </div>
      </div>
      <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=8ZoiKkepfrM" controls/>
        </div>
        </div>
    </div>
  )
}

export default Optic