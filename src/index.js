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
import axios from 'axios'

// axios.get('http://localhost:3001/dives').then(response => {
//   const dives = response.data
//   ReactDOM.render(<App dives={dives} />, document.getElementById('root'))
// })

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
