<template>
    
<div class="row"> 
    <!-- <h1>Hello result</h1> -->
    <p> anthoer Result Counter is {{counter}}</p>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    // props:['counter']
    computed:{
        counter(){
            // return this.$store.state.counter * 2;
             return this.$store.getters.doubleCounterFun;
        }
    }
}
</script>
<style scoped>

</style>