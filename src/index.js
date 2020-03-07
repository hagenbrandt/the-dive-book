import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import DetailLog from './DetailLog'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './common/GlobalStyles'
import BackgroundLog from './BackgroundLog'
import LogBook from './Logbook'

const routing = (
  <Router>
    <GlobalStyle />
    <BackgroundLog>
      <Route exact path="/" component={App} />
      <Route path="/DetailLog" component={DetailLog} />
      <Route path="/LogBook" component={LogBook} />
    </BackgroundLog>

    <Footer />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
