import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getParticipants(pageNo: number, pageSize: number) {
    return apiClient.get('/participants?pageNo=' + pageNo + '&pageSize=' + pageSize)
  },
  getParticipant(id: number) {
    return apiClient.get(`/participants/${id}`)
  },
}
