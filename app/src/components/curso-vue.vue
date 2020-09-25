<template>
  <div>
      <Fade>
        <p v-if="show">Hello</p>
      </Fade>
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
          
      </transition>
  </div>
</template>
 
<script>
import Fade from './animations/fade'
export default {
  name: 'CursoVue',
  data() {
    return {
      show: true
    }
  },
  components: {
    Fade
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
