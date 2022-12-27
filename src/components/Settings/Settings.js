import React from 'react'
import { typeOfSound } from '../../constans'
import { SettingsElement } from '../SettingsElement/SettingsElement'

export const Settings = ({ data, setData }) => {
  return (
    <>
      {Object.keys(data).map(item => (
        <SettingsElement name={item} key={item} data={data} setData={setData} />
      ))}
    </>
  )
}
