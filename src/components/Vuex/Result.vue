<template>
    
<div class="row"> 
    <!-- <h1>Hello result</h1> -->
    <p> Counter is {{counter}}</p>
</div>
</template>
<script>

export default {
    // props:['counter']
    computed:{
        counter(){
            // return this.$store.state.counter;
              return this.$store.getters.doubleCounter;
        }
    }
}
</script>
<style scoped>

</style>