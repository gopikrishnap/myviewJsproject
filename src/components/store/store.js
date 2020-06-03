import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuextcx .Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounterFunc : (state) => {
      return state.counter * 2;
    }
  }
});
