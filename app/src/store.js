import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ob1 = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        getCount: (state) =>{
            return state.count
        }
    },
}

const ob2 = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        getCount: (state) =>{
            return state.count
        }
    },
}

const store = new Vuex.Store({
    modules: {
        a: ob1,
        b: ob2
    }
})

export default store