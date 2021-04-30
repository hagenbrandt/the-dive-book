import React, { useState, useEffect } from 'react'
import { getDives } from '../services'
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
  )
}

const DiveList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  height: 100%;
  padding-bottom: 120px;
`

export default LogList