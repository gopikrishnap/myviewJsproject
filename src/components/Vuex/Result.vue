<template>
  <div class="row">
    <!-- <h1>Hello result</h1> -->
    <p>Counter mapGetter is {{doubleCounterFun}}</p>
    <p>string Counter mapGetter  is {{stringCounterFun}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // props:['counter']
  computed: {
    ...mapGetters(["doubleCounterFun", "stringCounterFun"])
  }
  // {
  // counter() {
  //   // return this.$store.state.counter;
  //   return this.$store.getters.doubleCounterFunc;
  // },
  // clicks() {
  //   return this.$store.getters.stringCounter;
  // }
};
</script>
<style scoped>
</style>