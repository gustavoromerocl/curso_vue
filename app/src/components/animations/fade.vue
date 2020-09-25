<template>
    <transition 
        enter-active-class="animated tada" 
        leave-active-class="animated bounceInRight"
    >
        <slot></slot>
    </transition>
</template>
 
<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
