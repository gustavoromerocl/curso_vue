<template>
  <div>
      <button @click="show = !show">Toggle</button>
      <transition name="fade" enter-active-class="animated tada" leave-active-class="animated bounceInRight">
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

</style>
