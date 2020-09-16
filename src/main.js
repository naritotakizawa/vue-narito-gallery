import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


if (process.env.VUE_APP_NARITOGALLERY_ANALYTICS_ID) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_NARITOGALLERY_ANALYTICS_ID,
    router
  })
}

