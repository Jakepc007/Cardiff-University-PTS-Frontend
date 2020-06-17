import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getActiveAlert() {
    return apiClient.get('/alert')
  },
  getCurrentRecord(id) {
    return apiClient.get('/records/' + id)
  },
  getRecords() {
    return apiClient.get('/records')
  },
  submitForm(form) {
    return apiClient.post('records/', form)
  }
}
