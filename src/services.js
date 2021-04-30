import axios from 'axios'
import { logsRef } from './config/firebase/firebase'

export function getDives(documentId = '') {
  return fetchLogs(documentId)
}

export function postDives(object) {
  return axios.post('http://localhost:3001/dives/', object)
}

export function getLogs(documentId, data) {}

export function postLogs(data) {
  return logsRef
    .add(data)
    .then(docRef => {
      const documentId = docRef.id

      logsRef.doc(documentId).update({})
      return documentId
    })
    .then(documentId => {
      return logsRef
        .doc(documentId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

export function patchLogs(documentId, data) {
  return logsRef
    .doc(documentId)
    .update(data)
    .then(() => {
      return logsRef
        .doc(documentId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

function fetchLogs() {
  return logsRef.get().then(querySnapshot => {
    let logsData = []
    querySnapshot.forEach(doc => {
      logsData.push(doc.data())
    })
    return logsData
  })
}
