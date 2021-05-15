import React, { useState, useEffect } from 'react'
import { getDives } from '../data/fetch/services'
import BackgroundLog from '../backgroundLog/BackgroundLog'
import styled from 'styled-components'
import DiveLogs from '../diveLog/DiveLog'
import uuid from 'react-uuid'

export const LogList = () => {
  const [dives, setDives] = useState([])

  useEffect(() => {
    getDives().then(res => {
      setDives(res)
    })
  }, [])

  return (
    <BackgroundLog>
    <DiveList>
      {dives.map(dive => (
        <DiveLogs
          country={dive.country}
          city={dive.city}
          key={uuid()}
          divesite={dive.divesite}
          id={dive.id}
          img={dive.img}
        />
      ))}
    </DiveList>
    </BackgroundLog>
  )
}

const DiveList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 200px;
`

export default LogList