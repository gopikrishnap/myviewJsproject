<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
// import singup from './components/auth/singup';
// import dashboard from './components/dashboard/dashboard'
// import welcome from './components/home/welcome'
// import vuex from './components/Vuex/Vuex'
export default {
  data() {
    return {};
  },
  components: {
    'app-header': header,
  }
};
</script>
<style scoped>
</style>
