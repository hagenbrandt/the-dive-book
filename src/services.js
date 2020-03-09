import axios from 'axios'

export function getDives(id = '') {
  return axios.get(`http://localhost:3001/dives/` + id)
}
