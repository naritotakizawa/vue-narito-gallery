import axios from 'axios'
import mock from './mock';

const client = axios.create({ baseURL: process.env.VUE_APP_NARITOGALLERY_API_ROOT })

// モック起動
if (JSON.parse(process.env.VUE_APP_NARITOGALLERY_USE_MOCK)) {
  mock.run(client)
}

export default {
  product: {
    list: (keyword, category, page) => {
      return client.get(`/products/?keyword=${keyword}&category=${category}&page=${page}`)
    },

    retrieve: (id) => {
      return client.get(`/products/${id}/`)
    },
  },

  category: {
    list: (keyword, category) => {
      return client.get(`/categories/?keyword=${keyword}&category=${category}`)
    }
  }
}