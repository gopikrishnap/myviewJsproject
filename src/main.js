import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import axios from 'axios'
import vuelidate from 'vuelidate'
import { routes } from './routes'
import { store } from './store/store.js'

// axios.defaults.baseURL = 'https://myvueproject-da50e.firebaseio.com'

Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(vuelidate);

Vue.directive('highlight', {
  bind(el, binding, vnode) {
      // el.style.backgroundColor = 'green';
      // el.style.backgroundColor = binding.value;
      var delay = 0;
      if (binding.modifiers['delayed']) {
          delay = 3000;
      }
      setTimeout(() => {
          if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
          } else {
              el.style.color = binding.value;
          }
      }, delay);
  }
});

const router = new VueRouter({
  routes,
  mode: 'history'
  //mode is for remove # tag in  the URL
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
