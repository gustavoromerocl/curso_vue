<template>
  <div id="app">
    <p>{{ $store.getters['b/getMessage'] }}</p>
    <input v-model="message" type="text">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    add: function() {

    }
  },
  created() {
    this.$store.commit('b/increment', "Hola") // se de realizar de esta manera
    this.$store.state.message = "Hola" // esta es una mala practica
  },
  computed: {
    message: {
      set(value) {
        this.$store.commit('b/increment', value)
      },
      get() {
        return this.$store.getters['b/getMessage']
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
