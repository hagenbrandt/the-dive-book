import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyD_2sEqRYzBOHvFvTg7c6myHpqYShWSxyc',
  authDomain: 'thedivebook.firebaseapp.com',
  databaseURL: 'https://thedivebook.firebaseio.com',
  projectId: 'thedivebook',
  storageBucket: 'thedivebook.appspot.com',
  messagingSenderId: '683799707216',
  appId: '1:683799707216:web:358e0b288c96039a87db55',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const logsRef = db.collection('logs')
