import Vue from 'vue'
import Vuex from 'vuex'

import sample from './modules/sample'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  modules: {
    sample
  }
})

export default store
