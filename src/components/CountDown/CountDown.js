import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, IconButton, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'

export const CountDown = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  startPauseMusic,
  isPause,
  soundStopHanldeSoundComponent,
}) => {
  const [paused, setPaused] = useState(isPause)
  const [over, setOver] = useState(false)
  const [[h, m, s], setTime] = useState([hours, minutes, seconds])
  // const classes = useStyles()

  useEffect(() => {
    startPauseMusic(paused)
  }, [paused])

  const tick = () => {
    // if (paused || over) {
    if (over) {
      startPauseMusic(true)
      setPaused(true)
      soundStopHanldeSoundComponent()
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

  // const reset = () => {
  //   setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
  //   setPaused(false)
  //   setOver(false)
  // }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  // const pauseHandle = () => {
  //   setPaused(prev => !prev)
  // }
  return (
    <>
      {/* <Grid container>
        <Grid xs={9}>
          <p>{`${h.toString().padStart(2, '0')}:${m
            .toString()
            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        </Grid>
        <Grid xs={3}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div>{over ? "Time's up!" : ''}</div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button className={classes.button} onClick={pauseHandle}>
          {paused ? 'Resume' : 'Pause'}
        </Button>
        <Button className={classes.button} onClick={() => reset()}>
          Restart
        </Button>
      </ButtonGroup> */}
    </>
  )
}

// const useStyles = makeStyles({
//   button: {
//     width: '100px',
//   },
//   container: {
//     display: 'none',
//   },
// })
