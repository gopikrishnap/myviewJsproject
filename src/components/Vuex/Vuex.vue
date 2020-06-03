<template>
  <div style="margin-top:120px" class="container">
    <h1>Vuex</h1>
    <!-- <app-result  :counter="counter"></app-result>
    <hr />
    <app-counter  @update="counter +=$event"></app-counter>-->
    <app-result></app-result>
    <hr />
    <app-anthoerResult></app-anthoerResult>
    <hr />
    <app-counter></app-counter>
  </div>
</template>
<script>
import Counter from './Counter';
import Result from './Result';
import anthoerResult from './anotherResult';
export default {
//   data() {
//     return {
//       counter: 0
//     };
//   },
  components: {
    'app-result': Result,
    'app-counter': Counter,
    'app-anthoerResult': anthoerResult
  }
};
</script>
<style scoped>
</style>