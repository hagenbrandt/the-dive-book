import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DiveLogs from './DiveLog'
import Footer from './Footer'

const App = () => {
  const [dives, setDives] = useState([])
  const [newDive, setNewDive] = useState([])
  const [showAll, setShowAll] = useState(true)

  const hookDives = () => {
    console.log('effect')
    axios.get('http://localhost:3001/dives').then(response => {
      console.log('promise fulfilled')
      setDives(response.data)
    })
  }
  useEffect(hookDives, [])
  console.log('render', dives.length, 'dives')
  console.log(dives.id)

  return (
    <div id="root">
      {/* <BackgroundLog> */}
      <DiveLogs />
      <DiveLogs />
      <DiveLogs />
      <DiveLogs />
      <Footer />
      {/* </BackgroundLog> */}
    </div>
  )
}

export default App
