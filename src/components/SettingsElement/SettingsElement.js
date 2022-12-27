import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox, FormControlLabel, Slider } from '@material-ui/core'
import { DoneAllSharp, IndeterminateCheckBoxSharp } from '@material-ui/icons'

export const SettingsElement = ({ name }) => {
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)
  const [value, setValue] = useState(1)

  return (
    <div className={classes.container}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<IndeterminateCheckBoxSharp />}
            checkedIcon={<DoneAllSharp color="primary" />}
            name={name}
            checked={isChecked}
            onChange={(e)=>setIsChecked(e.target.checked)}
          />
        }
        label={name}
      />
      <Slider
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        disabled={!isChecked}
        value={value}
        onChange={(_,newValue)=>setValue(newValue)}
      />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
  },
}))
