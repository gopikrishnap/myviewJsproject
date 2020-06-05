<template>
  <div>
    <h1>Welcome to User page</h1>
    <p>Loaded Id :{{id}}</p>
    <button class="btn btn-primary" @click="goToHomePage">Go TO Sign up</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    goToHomePage() {
      // this.$router.push('/'); if nam is not decelared in Routing
      this.$router.push({ name: "singup" });
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  }
};
</script>