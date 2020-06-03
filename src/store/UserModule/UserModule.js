const state = {
  counter: 0,
  value: 0
};

const getters = {
  doubleCounterFun: state => {
    return state.counter * 2;
  },
  stringCounterFun: state => {
    return state.counter + "" + "Clicks";
  },
  value: state => {
    return state.value;
  }
};


const mutations = {
  increment: (state, payload) => {
    // state.counter++;
    state.counter += payload;
  },
  Decrement: (state, payload) => {
    state.counter -= payload;
  },
  incrementmapMutations: state => {
    state.counter++;
  },
  DecrementmapMutations: state => {
    state.counter--;
  },
  updatedValue: (state, payload) => {
    return (state.value = payload);
  }
};

const actions = {
  // increment : context =>{
  //   context.commit('increment')
  // }
  increment: ({ commit }, payload) => {
    commit("increment", payload);
  },
  Decrement: ({ commit }, payload) => {
    commit("Decrement", payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("increment", payload.by);
    }, 2000);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("Decrement", payload.by);
    }, payload.duration);
  },
  updatedValue: ({ commit }, payload) => {
    commit("updatedValue", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
