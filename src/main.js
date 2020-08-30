import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueMasonryPlugin } from 'vue-masonry';

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueMasonryPlugin)