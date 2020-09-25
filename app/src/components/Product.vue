<template>
  <div>
      <p>{{item.id}}</p>
      <p>{{item.name}}</p>
      <button @click="show(item.id)">Ver</button>
  </div>
</template>
 
<script>

export default {
  name: 'Product',

  props: {
    item: Object
  },

  data() {
    return {

    }
  },

  methods: {
    show: function(proId) {
      this.$router.push({ name: 'details', params: { Pid: proId } })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
