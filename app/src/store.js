import Vue from 'vue'
import Vuex from 'vuex'
import ob1 from './stores/new-store.js'

Vue.use(Vuex)


const ob2 = {
    namespaced: true,
    state: {
        message: ""
    },
    mutations: {
        increment(state, value) {
            state.message = value
        }
    },
    getters: {
        getMessage: (state) =>{
            return state.message
        }
    },

    // El modo estricto no permite que se muten las propiedades desde metodos externos a Vuex
   /* strict: true */
   strict: process.env.NODE_ENV !== 'production' //activar el modo estricto solo en entorno de desarrollo.
}

const store = new Vuex.Store({
    modules: {
        a: ob1,
        b: ob2
    }
})

export default store