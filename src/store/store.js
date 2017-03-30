import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchValue:""
    },

    getters:{
        value:state=>{
            return state.searchValue
        }
    },

    mutations:{
        updateValue:(state, payload)=>{
            state.searchValue = payload
         },
    },

    actions:{
        updateValue({commit},payload){
            commit('updateValue',payload)
        }
    }
})