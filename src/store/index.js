import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    o:{
      ucode:0,
      uid:0,
      uname:''
    }
   
  },
  mutations: {
    setid(state,ucodes){
     state.o.ucode=ucodes.ucode
     state.o.uid=ucodes.uid
     state.o.uname=ucodes.uname
    
    }
   
    
  },
  actions: {
  },
  modules: {
  }
})
