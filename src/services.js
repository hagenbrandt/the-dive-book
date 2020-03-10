import axios from 'axios'
import { logsRef } from './firebase'

export function getDives(id = '') {
  return axios.get(`http://localhost:3001/dives/` + id)
}

export function postDives(object) {
  return axios.post('http://localhost:3001/dives/', object)
}

export function getLogs() {
  return fetchLogs()
}

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
    let cardsData = []
    querySnapshot.forEach(doc => {
      cardsData.push(doc.data())
    })

    return cardsData
  })
}
