import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogList from './LogList'
import BackgroundLog from './backgroundLog/BackgroundLog'
import DetailLog from './detailLog/DetailLog'
import LogBook from './logBook/Logbook'
import { CameraSite } from './camera/CameraSite'
import Footer from './footer/Footer'

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
