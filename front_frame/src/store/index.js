import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import new_session from "./state/new_session";
import session from "./mutations/session";

export default new Vuex.Store({
  state: {
    ...new_session,
  },
  getters: {
  },
  mutations: {
    ...session,
  },
  actions: {
  },
  modules: {
  }
})
