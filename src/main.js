import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import  axios from 'axios'
import vuelidate from 'vuelidate'
import  {routes} from './routes' 
import {store }from './store/store.js'

axios.defaults.baseURL='https://myvueproject-da50e.firebaseio.com'

Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(vuelidate);
// Vue.http.options.root='https://myvueproject-da50e.firebaseio.com/'
const router = new VueRouter({
  routes,
  mode:'history'
  //mode is for remove # tag in  the URL
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
