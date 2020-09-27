import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router.js'
import VueRouter from  'vue-router'
import store from './store.js'


Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Vuelidate)

//Definir directiva de manera global
Vue.directive('width', {
    inserted: function(el, binding) {
    el.style.width = binding.value;
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
