<template>
  <div>
      <Product v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>
 
<script>
import Product from './Product'

export default {
    data() {
        return {
            items: [
                {id:1, name:"item1"},
                {id:2, name:"item2"},
                {id:3, name:"item3"},
                {id:4, name:"item4"},
                {id:5, name:"item5"},
                {id:6, name:"item6"},
            ]
        }
    },
    components: {
        Product 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
