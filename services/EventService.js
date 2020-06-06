import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3031`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getActiveAlert() {
    return apiClient.get('/alert')
  }
}
