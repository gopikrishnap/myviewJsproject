<template>
  <div class="row">
    <button type="button" class="btn btn-primary" @click="increment">Increment</button>
    <button type="button" class="btn btn-success" @click="Decrement">Decrement</button>
  </div>
</template>
<script>
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
    }
  }
};
</script>
<style scoped>
</style>