import React, { useRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CountDown } from '../CountDown/CountDown'

export const SoundComponent = ({ typeOfSound }) => {
  const audioRef = useRef()
  const classes = useStyles()
  const startPauseMusic = isPause => {
    isPause ? audioRef.current.pause() : audioRef.current.play()
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h2">
          {typeOfSound.toUpperCase() + " SOUND"}
        </Typography>
        <CountDown
          hours={1}
          minutes={45}
          seconds={10}
          startPauseMusic={startPauseMusic}
        />
        <audio
          loop
          src={`./audio/${typeOfSound}.mp3`}
          ref={audioRef}
          className={classes.hide}
        />
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    width:' 15%',
    margin: '10px',
    backgroundColor: '#eee',
    minWidth : '230px'
  },
  title: {
    fontSize: 14,
  },
  hide: {
    display: 'none',
  },
})
