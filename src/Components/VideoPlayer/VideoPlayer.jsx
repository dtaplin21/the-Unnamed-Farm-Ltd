/*eslint-disable*/
import { useRef } from "react"
import React from 'react'
import './VideoPlayer.css'
import Video from '../../assets/New-farm-video.mp4'

const VideoPlayer = ({play, setPlay}) => {

    const player = useRef(null)

    const closePlayer = (e) => {
        if(e.target === player.current) {
            setPlay(false)
        }
    }

  return (
    <div className={`video-player ${play?'':'hide'}`} ref={player} onClick={closePlayer}>
        <div className="video">
            <video src={Video} autoplay muted controls></video>
        </div>
    </div>
  )
}

export default VideoPlayer