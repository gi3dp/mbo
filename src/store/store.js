import Vue from 'vue'
import Vuex from 'vuex'
import apartments from '../getInfo'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchValue:"",
        apartments,
    },

    getters:{
        value:state=>{
            return state.searchValue
        },
        apartment:state =>{
            return state.apartments
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