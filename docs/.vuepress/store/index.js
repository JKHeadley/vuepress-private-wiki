import Vue from 'vue'
import Vuex from 'vuex'
import generateMutations from './utilities/generate-mutations'

import auth from './modules/auth'

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const internals = {
  store: {}
}


internals.store = new Vuex.Store({
  state,
  actions,
  mutations: Object.assign(mutations, generateMutations(state)),
  modules: {
    auth
  },
})

internals.store.setVue = (vue) => {
  internals.store.vm = vue
}

export default internals.store
