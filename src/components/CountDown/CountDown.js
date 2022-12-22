import React, { useState, useEffect } from 'react'

export const CountDown = ({ hours = 0, minutes = 0, seconds = 0 , startPauseMusic}) => {
  const [paused, setPaused] = useState(true)
  const [over, setOver] = useState(false)
  const [[h, m, s], setTime] = useState([hours, minutes, seconds])

  useEffect(()=>{
    startPauseMusic(paused)
  },[paused])

  const tick = () => {
    if (paused || over) {
        startPauseMusic(true)
        return
    }

    if (h === 0 && m === 0 && s === 0) {
      setOver(true)
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59])
    } else if (s === 0) {
      setTime([h, m - 1, 59])
    } else {
      setTime([h, m, s - 1])
    }
  }

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
    setPaused(false)
    setOver(false)
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

const pauseHandle = () =>{
    setPaused(prev => !prev)
}
  return (
    <div>
      <p>{`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
        .toString()
        .padStart(2, '0')}`}</p>
      <div>{over ? "Time's up!" : ''}</div>
      <button onClick={pauseHandle}>
        {paused ? 'Resume' : 'Pause'}
      </button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  )
}
