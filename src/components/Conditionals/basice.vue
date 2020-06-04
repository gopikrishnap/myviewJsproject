<template>
  <div id="app" class="container" style="margin-top:120px">
    <h4 v-once>{{title}}</h4>
    <hr />
    <h1>
      {{ Sayhello() }} -
      <a v-bind:href="link">google</a>
    </h1>
    <hr />
    <h1 v-html="FinishedLikHTMl"></h1>
    <hr />

    <button class="btn btn-primary" v-on:click="Increase">Increase counter one</button>
    <button class="btn btn-primary" v-on:click="Increasetwo(2,$event)">Increase counter two</button>
    <p>{{counter}}</p>
    <hr />
    <p v-on:mousemove="Updatecoordinates">Coordinates {{x}} / {{y}}</p>
    <hr />

    <input type="text" v-on:keyup.enter.space="Alert" />
    <!-- // v-on:keyup -->
    <hr />
    <h1>Two Way Data Bind</h1>
    <input type="text " v-model="twowaybind" />

    <h1>{{twowaybind}}</h1>
    <hr />
    <button  class="btn btn-primary" v-on:click="increasemethod">Grater and smaller</button>
    <p>{{counter}}</p>
    <p>{{result}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello Vue!!!!!!!!! function",
      link: "https://www.google.com",
      FinishedLikHTMl: '<a href="https://www.google.com">google</a>',
      counter: 0,
      x: 0,
      y: 0,
      twowaybind: "",
      result: ""
    }
  },
  methods: {
    Sayhello: function() {
      this.title = "Gopikrishna";
      return this.title;
    },
    Increase: function() {
      this.counter++;
    },
    Increasetwo: function(setp, event) {
      this.counter += setp;
    },
    Updatecoordinates: function(event) {
      // console.log(event)
      this.x = event.clientX;
      this.y = event.clientY;
    },
    Alert: function() {
      alert("alert!!!!");
    },
    increasemethod: function() {
      this.counter++;
      this.result = this.counter > 5 ? "Grater 5" : "Smaller 5";
    }
  }
};
</script>