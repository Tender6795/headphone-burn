import React, { useState } from 'react'
import { onlyCheckedData } from '../../helper'
import ProgressElement from '../ProgressElement/ProgressElement'

export const Burning = ({ data }) => {
  const [dataToBurn, setDataToBurn] = useState(onlyCheckedData(data))

  return (
    <div>
      {Object.keys(dataToBurn).map(item => (
        <ProgressElement name={item} data={dataToBurn} key={item}/>
      ))}
    </div>
  )
}
