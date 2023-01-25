import React, { useState } from 'react'
import { addPauseProps, isEmptyObj, objWithNonPause, onlyCheckedData } from '../../helper'
import ProgressElement from '../ProgressElement/ProgressElement'
import { SoundComponent } from '../SoundComponet/SoundComponent'

export const Burning = ({ data }) => {
  const [dataToBurn, setDataToBurn] = useState(
    addPauseProps(onlyCheckedData(data))
  )

  const soundStopHanlde = typeOfSound => {
    const newDataToBurn = { ...dataToBurn }
    delete newDataToBurn[typeOfSound]
    setDataToBurn(addPauseProps(newDataToBurn))
  }

  const onlyNoPause = objWithNonPause(dataToBurn)
  

  return (
    <div>
      {isEmptyObj(onlyNoPause) ? (
        Object.keys(onlyNoPause).map(item => (
          <React.Fragment key={item}>
            <ProgressElement name={item} data={dataToBurn} />
            <SoundComponent
              typeOfSound={item}
              data={dataToBurn[item]}
              soundStopHanlde={soundStopHanlde}
            />
          </React.Fragment>
        ))
      ) : (
        <h1>is done</h1>
      )}
    </div>
  )
}
