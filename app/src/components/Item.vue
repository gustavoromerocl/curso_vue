<template>
  <div>
      <p>{{name}}</p>
      <button @click="add">Agregar</button>
  </div>
</template>
 
<script>

export default {
  name: 'Item',

  props: ['name'],

  data() {
    return {

    }
  },

  methods: {
    add: function() {
       // console.log(this.$parent.$data.flag)
        this.$emit('add', this.name)
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
