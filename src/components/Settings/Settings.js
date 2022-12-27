import React from 'react'
import { typeOfSound } from '../../constans'
import { SettingsElement } from '../SettingsElement/SettingsElement'

export const Settings = () => {
  return (
    <>
      {Object.values(typeOfSound).map(item=> <SettingsElement name={item} key={item}/>)}
    </>
  )
}
