<template>
  <div id="app" style="margin-top:120px">
    <h1 class="colorhead">If else -V-if and V-else</h1>
    <p v-if="show">Hello If candition</p>
    <p v-else>Hello else candition</p>
    <button class="button" @click="show=!show">Switch-if-else</button>
    <hr class="hr" />
    <h1 class="colorhead">If else -V-if and V-else</h1>
    <p v-if="showtemp">Hello If candition</p>
    <p v-else>Hello else candition</p>
    <template class="Red" v-if="showtemp">
      <h1>heding</h1>
      <p>inside template</p>
    </template>
    <p v-show="showtemp">Do you also see me</p>
    <button class="button" @click="showtemp=!showtemp">Switch-show</button>
    <hr class="hr" />
    <h1 class="colorhead">V-for condition</h1>
    <ul>
      <h1 v-for="ingredient in ingredients" :key="ingredient">{{ingredient}}</h1>
    </ul>
    <hr class="hr" />
    <h1 class="colorhead">V-for-index</h1>
    <ul>
      <h1 v-for="(ingredient,i) in ingredients" :key="ingredient">{{ingredient}} ({{i}})</h1>
    </ul>
    <hr class="hr" />
    <h1 class="colorhead">V-for-Template</h1>
    <div>
      <h1 v-for="(ingredient,i) in ingredients" :key="ingredient">{{ingredient}} ({{i}})</h1>
    </div>
    <!-- <template v-for="(ingredient,i) in ingredients"  >
            <h1> {{ingredient}} ({{i}})</h1>
    </template>-->
    <hr class="hr" />
    <h1 class="colorhead">V-for-object with -key</h1>
    <ul>
      <li v-for="person in persons" :key="person">
        <div v-for="(value,key,index) in person" :key="value">{{key}} :{{value}} ----- {{index}}</div>
      </li>
    </ul>
    <hr class="hr" />
    <h1 class="colorhead">V-for-arry with -key</h1>
    <ul>
      <h1 v-for="(ingredient,i) in ingredients" v-bind:key="ingredient">{{ingredient}} ({{i}})</h1>
    </ul>
    <button class="button" @click="ingredients.push('pens')">Push-value</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Hello: "Welcome to Directives",
      show: true,
      showtemp: true,
      ingredients: ["Meet", "fruits", "cookiess"],
      persons: [
        { name: "gopikrishna", age: "22", color: "blue" },
        { name: "Neelima", age: "21", color: "red" },
        { name: "Krishna", age: "23", color: "yellow" }
      ]
    };
  }
};
</script>