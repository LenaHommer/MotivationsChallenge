<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from "./pages/HomePage.vue"

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.bg-vue {
  background-color: rgb(94, 125, 87);
  color: white;
}
.bg-vue2 {
  background-color: rgb(26, 61, 30);
  color: white;
}
.text-vue {
  color: rgb(94, 125, 87);
}
.text-vue2 {
  color: rgb(26, 61, 30);
}

</style>
