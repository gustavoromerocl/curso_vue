<template>
  <div id="app">
      <p>{{$store.getters['a/getCount']}}</p>
  <!--    <p>{{$store.getters.getCount}}</p> -->
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    add: function() {
      this.$store.commit('a/increment')
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
