<template>
  <div>
 <app-header></app-header>

 <router-view></router-view>

  </div>
</template>
<script>

import header from './components/header/header';
import singup from './components/auth/singup';
import dashboard from './components/dashboard/dashboard'
import welcome from './components/home/welcome'
export default {
 data(){
   return{

   }
 },
 components:{
    'app-header' : header,
    'app-singup':singup,
    'app-dashboard':dashboard,
     'app-welcome':welcome
 }

};
</script>
<style  scoped>
</style>