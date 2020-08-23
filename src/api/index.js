import axios from 'axios'

const client = axios.create({ baseURL: process.env.VUE_APP_NARITOGALLERY_API_ROOT })

const api = {
  product: {
    list: () => {
      return new Promise((resolve, reject) => {
        client.get('/products')
          .then(res => resolve({ data: res.data }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    }
  },

  category: {
    list: () => {
      return new Promise((resolve, reject) => {
        client.get('/categories')
          .then(res => resolve({ data: res.data }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    }
  }
}

export default api
