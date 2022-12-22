import React, { useRef } from 'react'

import style from './SoundComponent.module.css';
import { CountDown } from '../CountDown/CountDown';


export const SoundComponent = () => {
  const audioRef = useRef()

  const startPauseMusic = (isPause) => {
    isPause ? audioRef.current.pause(): audioRef.current.play()
  }

  return (
    <>
      <CountDown 
      hours={1} 
      minutes={45} 
      seconds ={10}
      startPauseMusic={startPauseMusic}/>
      <audio
        loop
        src="./audio/test2.mp3"
        ref={audioRef}
        className={style.hide}
      />
    </>
  )
}
