<template>
  <div id="Instance"  style="margin-top:120px">
    <h1>{{title}}</h1>
    <p v-if="showparagraph">This is not always visible</p>
    <button class="button" @click="show">Switch-if-else</button>
    <hr class="hr" />
    <h1 class="colorhead">$refs concept</h1>
    <p v-if="showparagraph">This is not always visible</p>
    <button class="button" @click="showref" ref="Submitbiutton">Switch-if-else</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showparagraph: false,
      showparagraphref: false,
      title: "The Vue js Instance",
      ingredients: ["Meet", "fruits", "cookiess"],
      persons: [
        { name: "gopikrishna", age: "22", color: "blue" },
        { name: "Neelima", age: "21", color: "red" },
        { name: "Krishna", age: "23", color: "yellow" }
      ]
    };
  },
  methods: {
    show: function() {
      this.showparagraph = true;
      this.updatetitle("The Vue js Instance(updated)");
    },
    updatetitle: function(title) {
      this.title = title;
    },
    showref: function() {
      this.showparagraphref = true;
      // this.updatetitle('The Vue js Instance(updated)');
      console.log(this.$refs);
      this.$refs.Submitbiutton.innerText = "Changed";
    }
  },
  watch: {
    title: function(value) {
      alert("Title changed" + value);
    }
  }
};
</script>