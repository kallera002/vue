import Api from '@/Service/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
