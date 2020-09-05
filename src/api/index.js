import axios from 'axios'
import mock from './mock';

const client = axios.create({ baseURL: process.env.VUE_APP_NARITOGALLERY_API_ROOT })

// モック起動
if (JSON.parse(process.env.VUE_APP_NARITOGALLERY_USE_MOCK)) {
  mock.run(client)
}

const api = {
  product: {
    list: (keyword, category, page) => {
      return new Promise((resolve, reject) => {
        client.get(`/products/?keyword=${keyword}&category=${category}&page=${page}`)
          .then(res => resolve({ data: res }))
          .catch(err => {
            console.log(err)
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
