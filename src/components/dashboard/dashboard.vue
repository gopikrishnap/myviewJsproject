<template>
  <div class="header-sigup-cusome">
    <h1>Welcome to the Dashboard</h1>
  </div>
</template>

<script>
import vueAxios from "axios";
export default {
  created() {
    vueAxios
      .get('https://myvueproject-da50e.firebaseio.com/data.json')
      .then(res => {
        console.log("Resposne log---------->",res);
      })
      .catch(eror => {
        console.log("Error log---------->",eror);
      });
  }
};
</script>
<style scoped>
.header-sigup-cusome {
  margin-top: 79px !important;
}
</style>