<template>
  <div>
    <h1>Welcome to User deatils</h1>
    <h1>User loaded as id : {{$route.params.id}}</h1>
    <router-link tag="button" :to="'/user/'+ $route.params.id+'/edit'" class="btn btn-primary">Edit</router-link>
    <router-link
      tag="button"
      :to="{name:'useredit',params:{id:$route.params.id}}"
      class="btn btn-primary"
    >Edit-(using Name)</router-link>
  </div>
</template>
<script>
export default {};
</script>