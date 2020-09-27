import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        getCount: (state) => (id) =>{
            return state.count * id
        }
    },
    actions: {
        increment(context) {
            setTimeout( () => {
                context.commit('increment')
            }, 2000)
           
            
        }
    }
})

export default store