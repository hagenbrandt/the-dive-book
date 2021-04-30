import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogList from './LogList'
import BackgroundLog from './BackgroundLog/BackgroundLog'
import DetailLog from './DetailLog'
import LogBook from './Logbook'
import { CameraSite } from './Camera'
import Footer from './Footer'

export default function App() {
  return (
    <Router>
      <BackgroundLog>
        <Switch>
          <Route exact path="/" component={LogList} />
          <Route exact path="/DetailLog/:id" component={DetailLog} />
          <Route path="/LogBook" component={LogBook} />
          <Route path="/Camera" component={CameraSite} />
        </Switch>
      </BackgroundLog>
      <Footer />
    </Router>
  )
}
