import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        product: {
            list: [],
        },
        category: {
            list: [],
            selectedId: 0,
        },
        tags: [],
    },

    getters: {
        isSelectedCategory: (state) => (id) => {
            return state.category.selectedId === id
        },
        productCount: state => {
            return state.product.list.length
        }
    },

    mutations: {
        updateProductList(state, payload) {
            state.product.list = payload
        },
        updateCategoryList(state, payload) {
            state.category.list = payload
        },
        selectCategory(state, payload) {
            state.category.selectedId = payload
        },
    },
    actions: {
        loadProducts: ({ commit }) => {
            return api.product.list()
                .then(({ data }) => {
                    commit('updateProductList', data)
                })
                .catch(err => { throw err })
        },
        loadCategories: ({ commit }) => {
            return api.category.list()
                .then(({ data }) => {
                    commit('updateCategoryList', data)
                })
                .catch(err => { throw err })
        },

    },
})