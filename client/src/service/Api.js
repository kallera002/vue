import axios from 'axios'

export default() => {
  return axios.create({
    BaseURL: `http://localhost:8081`
  })
}
