import axios from 'axios'

export function getDives(id = '', object = '') {
  return axios.get(`http://localhost:3001/dives/` + id)
}

export function postDives(object) {
  return axios.post('http://localhost:3001/dives/', object)
}
