import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import DiveLogs from './DiveLog'
import BackgroundLog from './BackgroundLog'
import DetailLog from './DetailLog'
import LogBook from './Logbook'
import Footer from './Footer'

const App = props => {
  const { country, city, point } = props
  const [dives, setDives] = useState([props])

  function hookDives() {
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
    <Router>
      <BackgroundLog>
        <Switch>
          <Route exact path="/" component={App} />
          <div></div>
          <Route path="/DetailLog" component={DetailLog} />
          <Route path="/LogBook" component={LogBook} />
        </Switch>
        <Footer />
      </BackgroundLog>
    </Router>
  )

  const RenderDives = () => {
    dives.map(dive => (
      <DiveLogs
        country={dive.country}
        city={dive.city}
        point={dive.point}
        id={dive.id}
      />
    ))
  }
}

export default App
