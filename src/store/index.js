import Vue from "vue"
import Vuex from "vuex"

import state from "./state"
import getter from "./getter"
import actions from "./actions"
import mutations from "./mutations"


Vue.use(Vuex)

export default new Vuex.Store({
    state,getter,actions,mutations
})
