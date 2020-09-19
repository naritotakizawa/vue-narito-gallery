import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


if (process.env.VUE_APP_NARITOGALLERY_ANALYTICS_ID) {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_NARITOGALLERY_ANALYTICS_ID,
    router
  })
}

