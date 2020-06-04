<template>
  <div class="container" style="margin-top:120px">
    <h1>{{welcome |touppercase}} </h1>
    <input type="text" v-model="fiterText" />
    <ul>
      <li v-for="fruit in fruitsfilter" v-bind:key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fiterText: "",
      fruits: ["banana", "apple", "mango", "lemon"],
      welcome:'Welocme to Filter'
    };
  },
  computed: {
    fruitsfilter() {
      return this.fruits.filter((Element) => {
        return Element.match(this.fiterText);
      });
    }
  },
  filters:{
 touppercase(value){
return value.toUpperCase()
 }
  }
};
</script>

<style  scoped>
</style>