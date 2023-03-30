<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  computed: {
    token() {
      return this.$store.getters.token;
    },
  },
  created() {
    this.$store.dispatch("autoSignin");
  },
  watch: {
    token: {
      handler() {
        if (this.token) {
          this.$store.dispatch("fetchChallenges");
        }
      },
      immediate: true,
    },
  },
};
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

@media (min-width: 768px) {
       
}

@media (min-width: 480px) {
       
}



      


</style>
