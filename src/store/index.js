import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        products: {
        },
        categories: [
        ],
        selectedCategory: { id: 0, name: 'ALL' },
        currentProduct: null,
        keyword: '',
    },

    getters: {
        isSelectedCategory: (state) => (category) => {
            return state.selectedCategory.id === category.id
        },
        productCount: state => {
            return state.categories.reduce(
                (prev, category) => prev + category.product_count
                , 0)
        }
    },

    mutations: {
        addProductList(state, payload) {
            state.products.results.concat(payload.data.results)
            for (const product of payload.data.results) {
                state.products.results.push(product)
            }
            if (payload.data.next) {
                state.products.next = payload.data.next
            } else {
                state.products.next = null
            }
        },
        updateProductList(state, payload) {
            state.products = payload.data
        },
        updateCategoryList(state, payload) {
            state.categories = payload.data
        },
        updateSelectedCategory(state, payload) {
            state.selectedCategory = payload.category
        },
        updateKeyword(state, payload) {
            state.keyword = payload.keyword
        },
        updateCurrentProduct(state, payload) {
            state.currentProduct = payload.data
        },
    },
    actions: {
        selectCategory: ({ commit, dispatch }, payload) => {
            commit('updateSelectedCategory', payload)
            return dispatch('loadProducts')
        },
        updateKeyword: ({ commit, dispatch }, payload) => {
            commit('updateKeyword', payload)
            dispatch('loadCategories')
            return dispatch('loadProducts')
        },
        loadProducts: ({ commit, state }) => {
            return api.product.list(state.keyword, state.selectedCategory.id)
                .then(({ data }) => {
                    commit('updateProductList', data)
                })
                .catch(err => { throw err })
        },
        loadProductOne: ({ commit }, payload) => {
            return api.product.retrieve(payload.id)
                .then(({ data }) => {
                    commit('updateCurrentProduct', data)
                })
                .catch(err => { throw err })
        },
        moreProducts: ({ commit, state }) => {
            return api.product.url(state.products.next)
                .then(({ data }) => {
                    commit('addProductList', data)
                })
                .catch(err => { throw err })
        },
        loadCategories: ({ commit, state }) => {
            return api.category.list(state.keyword, state.selectedCategory.id)
                .then(({ data }) => {
                    commit('updateCategoryList', data)
                })
                .catch(err => { throw err })
        },

    },
})