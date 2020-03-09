import axios from 'axios'

export function getDives() {
  return axios.get(`http://localhost:3001/dives`)
}
