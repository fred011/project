import React from 'react'
import ReactPlayer from 'react-player'

function Acids() {
  return (
    <div>
      <h2>Acids And Bases</h2>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://youtube.com/watch?v=FM2MpMbV0rw&si=BG7CO6ZlCLJwSr-w"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://youtube.com/watch?v=owVZiKnnPME&si=yZQfJT8jHL0Wmemb"
            controls
          />
        </div>

      </div>
      <div className="red">
        <div className="space">
          <ReactPlayer
            url="https://youtube.com/watch?v=AaYQ_ZiE7AY&si=AsLNy4EKlKpdl9kW"
            controls
          />
        </div>
        <div>
          <ReactPlayer
            url="https://youtube.com/watch?v=kJTCuRSeh6g&si=6kv2nAPT9BuOJDDB"
            controls
          />
        </div>

      </div>
      
    </div>
  )
}

export default Acids