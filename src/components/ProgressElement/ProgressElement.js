import React from 'react'
import { LinearProgress, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function ProgressElement({ name, data }) {
  const classes = useStyles()
  return (
    <div className={classes.container} >
      <div className={classes.containerInfo}>
        <Typography variant="body2" color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          100%
        </Typography>
      </div>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={data[name].time}/>
      </Box>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  containerInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  container:{
    padding: '10px 20px',
  }
}))
