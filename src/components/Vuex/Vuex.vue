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
    <hr />
    <app-anotherCounter></app-anotherCounter>
    <hr />
    <!-- <input type="text" v-bind:value="value" @input="updatedValue" > -->
    <input type="text" v-model="value" />
    <p>{{value}}</p>
  </div>
</template>
<script>
import Counter from "./Counter";
import Result from "./Result";
import anthoerResult from "./anotherResult";
import anotherCounter from "./anotherCounter";
export default {
  //   data() {
  //     return {
  //       counter: 0
  //     };
  //   },
  computed: {
    // value(){
    //   return this.$store.getters.value; this is for noram v-bind  two-way binding
    // }
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        return this.$store.dispatch("updatedValue", value);
      }
    }
  },
  methods: {
    // updatedValue(event) {
    //   return this.$store.dispatch("updatedValue", event.target.value);
    // } this method is for v-bind  two-way binding
  },
  components: {
    "app-result": Result,
    "app-counter": Counter,
    "app-anthoerResult": anthoerResult,
    "app-anotherCounter": anotherCounter
  }
};
</script>
<style scoped>
</style>