import React from 'react'
import { SoundComponent } from './components/SoundComponet/SoundComponent'
import { typeOfSound } from './constans'

const App = () => {
  return (
      <>
        <SoundComponent typeOfSound={typeOfSound.WHITE} />
      </>
  )
}
export default App
