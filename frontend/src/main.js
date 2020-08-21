import Vue from 'vue'
//BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './App.vue'
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)

new Vue({
  rooter,
  store,
  render: h => h(App),
}).$mount('#app')
