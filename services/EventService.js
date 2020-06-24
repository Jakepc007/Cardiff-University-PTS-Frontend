import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: `http://localhost:3000`,
//   withCredentials: false, // This is the default
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

const apiClient2 = axios.create({
  baseURL: `http://localhost:8080`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getActiveAlert() {
    return apiClient2.get('/v1/alerts/latest/')
  },
  getCurrentRecord(id) {
    return apiClient2.get('/v1/records/' + id)
  },
  getRecords() {
    return apiClient2.get('/v1/records/')
  },
  submitForm(form) {
    return apiClient2.post('v1/records/', form)
  },
  test() {
    return apiClient2.get('/v1/records/1')
  }
}
