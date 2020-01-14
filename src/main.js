import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './assets/css/_vendor/themify-icons.css'
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
