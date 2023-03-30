<template>
<nav class="navbar navbar-expand-lg bg-vue navbar-dark">
  <div class="container-fluid mt-2">
    <a class="navbar-brand" href="#">mydiscipline</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <router-link to="/first" class="nav-link" href="#">Home<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create/challenge" class="nav-link" href="#">new Challenge</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/running/challenge" class="nav-link" href="#">laufende Challenge</router-link>
        </li>
      </ul>
      <button class="btn bg-vue2" @click="signout()">
            <i class="fas fa-sign-out-alt"></i> Logout
    </button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "TheNavbar",
    methods: {
        async signout() {
            try {
            await this.$store.dispatch("signout");
            this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>

</style>