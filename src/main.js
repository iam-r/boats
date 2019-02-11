import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import bootstrap from 'bootstrap'
import {ClientTable, Event} from 'vue-tables-2';
Vue.use(ClientTable);
// Vue.use(bootstrap);

Vue.prototype.$http = Axios;


const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
