import React from 'react'
import ReactPlayer from 'react-player'

function ElectroChem() {
  return (
    <div>
    <h2>Electrochemical Reactions</h2>
    <div className="red">
    <div className="space">
      <ReactPlayer url="https://youtube.com/watch?v=uvVp57gIj98&si=cbEU7YWTR5t_ES6U" controls/>
    </div>
    <div>
      <ReactPlayer url="https://youtube.com/playlist?list=PLOaNAKtW5HLRQK1aa7YxnXNy0ue9aAyi3&si=RTc3biB2Jh_odW61" controls/>
    </div>
  </div>
</div>
  )
}

export default ElectroChem