import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LogList from '../logList/LogList'
import BackgroundLog from '../backgroundLog/BackgroundLog'
import DetailLog from '../detailLog/DetailLog'
import LogBook from '../logBook/Logbook'
import { CameraSite } from '../camera/CameraSite'
import Footer from '../footer/Footer'
import SignIn from '../auth/SignIn'
import SignOut from '../auth/SignOut'
import {UserContext} from '../providers/UserProvider'
import {auth} from '../config/firebase/firebase'

export default function App() {
  const user = useContext(UserContext);
  return (
    <Router>
      {!user ? <Redirect to='/signIn'/> : null}
        <Route path="/signIn" component={SignIn}/>
      <BackgroundLog>
        {user ? <SignOut clickFunction={() => auth.signOut()} content={'X'} /> : null}
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
