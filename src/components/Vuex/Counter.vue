<template>
  <div class="row">
    <button type="button" class="btn btn-primary" @click="increment">Increment</button>
    <button type="button" class="btn btn-success" @click="Decrement">Decrement</button>
    <hr>
    <button type="button" class="btn btn-primary" @click="increment">Increment mapMutations</button>
    <button type="button" class="btn btn-success" @click="Decrement">Decrement mapMutations</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    increment() {
      //  this.$emit('update',1)
      this.$store.state.counter++;
    },
    Decrement() {
      //  this.$emit('update',-1)
      this.$store.state.counter--;
    },
     ...mapMutations(['incrementmapMutations', 'DecrementmapMutations']),
  }
};
</script>
<style scoped>
</style>