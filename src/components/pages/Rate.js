import React from 'react'
import ReactPlayer from 'react-player'

function Rate() {
  return (
    <div>
        <h2>Rate and exchange of reaction</h2>
        <div className="red">
        <div className="space">
          <ReactPlayer url="https://m.youtube.com/watch?v=Bn5ZGl6iUvs&list=PL-TAdh0NB2OfMXFhbzHq9DdcG434QC3Qk&index=1&pp=iAQB" controls/>
        </div>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?app=desktop&v=SIXw7H2t8yo&pp=ygUkcmF0ZSBhbmQgZXh0ZW50IG9mIHJlYWN0aW9uIGdyYWRlIDEy" controls/>
        </div>
      </div>
    </div>
  )
}

export default Rate