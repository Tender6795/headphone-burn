import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core'
import { Manual } from '../Manual/Manual'
import { Settings } from '../Settings/Settings'
import { Burning } from '../Burning/Burning'
import { Advertising } from '../Advertising/Advertising'
import { typeOfSound } from '../../constans'

export function CustomStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  let initialData = {}
  Object.values(typeOfSound).forEach(item => {
    initialData = { ...initialData, [item]: { isChecked: false, time: 1 } }
  })

  const [data, setData] = useState(initialData)
  
  function getSteps() {
    return ['Manual', 'Settings', 'Small Advertisting', 'Burning']
  }

  //Steps Contents
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Manual />
      case 1:
        return <Settings data={data} setData={setData} />
      case 2:
        return <Advertising />
      case 3:
        return <Burning />
      default:
        return 'Unknown stepIndex'
    }
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className={classes.pageContainer}>
            <div className={classes.pageContent}>
              {getStepContent(activeStep)}
            </div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 20px',
  },
  pageContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageContent: {
    minHeight: '350px',
    backgroundColor: '#eee',
    padding: '20px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))
