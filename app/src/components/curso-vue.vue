<template>
  <div>
    <a href="#">
      <slot name="header">
        Header
      </slot>
      <br>
      <slot name="body">
        Body
      </slot>
      <br>
      <slot name="footer">
        Footer
      </slot>
    </a>
  </div>
</template>
 
<script>
export default {
  name: 'CursoVue',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
