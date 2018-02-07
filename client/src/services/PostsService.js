import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('items')
  },

  addPost (params) {
    return Api().post('items', params)
  }
} 