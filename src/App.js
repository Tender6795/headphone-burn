import React from 'react'

import { typeOfSound } from './constans'
import { SoundComponent } from './components/SoundComponet/SoundComponent'
import { CustomStepper } from './components/CustomStepper/CustomStepper'

const App = () => {
  return (
      <>
        {/* <SoundComponent typeOfSound={typeOfSound.WHITE} /> */}
        <CustomStepper/>
      </>
  )
}
export default App
