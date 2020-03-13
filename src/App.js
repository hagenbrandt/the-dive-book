import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogList from './LogList'
import BackgroundLog from './BackgroundLog'
import DetailLog from './DetailLog'
import LogBook from './Logbook'
import Footer from './Footer'

export default function App() {
  return (
    <Router>
      <BackgroundLog>
        <Switch>
          <Route exact path="/" component={LogList} />
          <Route exact path="/DetailLog/:id" component={DetailLog} />
          <Route path="/LogBook" component={LogBook} />
        </Switch>
      </BackgroundLog>
      <Footer />
    </Router>
  )
}
