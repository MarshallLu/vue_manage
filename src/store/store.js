import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  msg:''
}

const mutations = {
  show(state,m){
    state.msg = m;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
















// store.js
