import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DiveLogs from './DiveLog'
import Footer from './Footer'

const App = props => {
  const { country, city, point } = props
  const [dives, setDives] = useState([props])

  const hookDives = () => {
    console.log('effect')
    axios.get('http://localhost:3001/dives').then(response => {
      console.log('promise fulfilled')
      setDives(response.data)
    })
  }
  useEffect(hookDives, [])
  console.log('render', dives.length, 'dives')
  console.log(dives[0].country)

  return (
    <div id="root">
      {dives.map(dive => (
        <DiveLogs country={dive.country} city={dive.city} point={dive.point} />
      ))}
      <Footer />
    </div>
  )
}

export default App
