<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
        <router-link to="/first" class="navbar-brand">mydescipline</router-link>
        <ul class="navbar-nav me-auto">
            <li class="nav-item active">
                <router-link to="/first" class="nav-link">Startseite</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/create/challenge" class="nav-link">neue Challenge</router-link>
            </li>
        </ul>
        <button class="btn bg-vue2" @click="signout()">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>
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