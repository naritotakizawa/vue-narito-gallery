import axios from 'axios'

const client = axios.create({ baseURL: process.env.VUE_APP_NARITOGALLERY_API_ROOT })

const api = {
  product: {
    list: (keyword, category) => {
      return new Promise((resolve, reject) => {
        client.get(`/products/?keyword=${keyword}&category=${category}`)
          .then(res => resolve({ data: res }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    },
    url: (url) => {
      return new Promise((resolve, reject) => {
        client.get(url)
          .then(res => resolve({ data: res }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    },
    retrieve: (id) => {
      return new Promise((resolve, reject) => {
        client.get(`/products/${id}`)
          .then(res => resolve({ data: res }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    },
  },

  category: {
    list: (keyword, category) => {
      return new Promise((resolve, reject) => {
        client.get(`/categories/?keyword=${keyword}&category=${category}`)
          .then(res => resolve({ data: res }))
          .catch(err => {
            reject(new Error(err.response.data.message || err.message))
          })
      })
    }
  }
}

export default api
