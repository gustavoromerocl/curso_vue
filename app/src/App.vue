<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Componente base de Vue"/>
    <CursoVue msg="Hola Mundo">
      <template v-slot:header>
        Este no es el Header
      </template>
    </CursoVue>
    <Shopping msg="Componente shopping"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Shopping from './components/Shopping.vue'
import CursoVue from './components/Curso-vue.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CursoVue,
    Shopping
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
