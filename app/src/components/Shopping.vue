<template>
  <div>
      <Item v-for="(item,index) in items" :name="item" :key="index" @add="addCart"></Item>
  </div>
</template>
 
<script>
import  Item  from './Item'

export default {
  name: 'Shopping',

  props: {
    msg: String
  },

  data() {
    return {
      items: ['item1','item2','item3','item4']
    }
  },

  methods: {
    addCart: function(value) {
      console.log(value)
    }
  },

  components: {
      Item
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
