import React, { useRef, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

const App = () => {
  const audioRef = useRef()
  const [isPause, setIsPause] = useState(true)
  const handleClick = () => {
    isPause ? audioRef.current.play() : audioRef.current.pause()
    setIsPause(prev => !prev)
  }
  return (
    <>
      <IconButton onClick={handleClick} variant="contained" color="primary">
        {isPause ? (
          <PlayCircleOutlineIcon fontSize="large" />
        ) : (
          <PauseCircleOutlineIcon fontSize="large" />
        )}
      </IconButton>

      <audio
        loop
        src="./audio/test2.mp3"
        ref={audioRef}
        className="hide"
      ></audio>
    </>
  )
}
export default App
