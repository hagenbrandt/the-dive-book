import React, { useState, useEffect } from 'react'
import { getDives, getLogs } from './services'
import DiveLogs from './DiveLog'

export default function LogList() {
  const [dives, setDives] = useState([])

  useEffect(() => {
    getDives().then(res => {
      //   debugger
      setDives(res)
    })
  }, [])
  console.log(dives)

  return (
    <div>
      {dives.map(dive => (
        <DiveLogs
          country={dive.country}
          city={dive.city}
          point={dive.point}
          id={dive.id}
        />
      ))}
    </div>
  )
}
