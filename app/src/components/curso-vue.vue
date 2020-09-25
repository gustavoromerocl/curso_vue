<template>
  <div>
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
          <p v-if="show">Hello</p>
      </transition>
  </div>
</template>
 
<script>

export default {
  name: 'CursoVue',
  data() {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
</style>
