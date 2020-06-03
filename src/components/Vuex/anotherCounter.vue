<template>
  <div>
    <button type="button" class="btn btn-primary" @click="increment(100)">Increment mapActions</button>
    <button type="button" class="btn btn-success" @click="Decrement(50)">Decrement mapActions</button>
    <hr>
     <button type="button" class="btn btn-primary" @click="asyncIncrement({by:100,duration :2000})">asyncIncrement mapActions</button>
    <button type="button" class="btn btn-success" @click="asyncDecrement({by:50,duration :2000})">asyncDecrement mapActions</button>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
export default {
  methods: {
    // ...mapMutations(['increment', 'Decrement']),
    ...mapActions(['increment', 'Decrement','asyncIncrement', 'asyncDecrement']),
    //  ...mapActions(['asyncIncrement', 'asyncDecrement']),
   
    
  },

};
</script>