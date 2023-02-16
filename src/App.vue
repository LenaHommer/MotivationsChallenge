<template>
  <div>
    <Login></Login>
  </div>
</template>

<script>
import Login from "./components/Login.vue"

export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";


</style>
