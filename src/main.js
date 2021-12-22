import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.config.productionTip = false

import router from './router'

new Vue({
  router,	
  render: h => h(App)
}).$mount('#app')

