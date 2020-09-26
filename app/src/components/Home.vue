<template>
  <div>
      <p>{{ name | uppercase }}</p>
      <input type="text" v-model="name"> 
  </div>
</template>
 
<script>


export default {
    data() {
        return {
            name: ""
        }
    },
    components: {

    },
    filters: {
        uppercase: function(value) {
            if(!value) return ''
            return value.toString().toUpperCase()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
