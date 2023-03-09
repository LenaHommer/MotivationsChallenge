<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
        <router-link to="/first" class="navbar-brand">Die Challenge</router-link>
        <ul class="navbar-nav me-auto">
            <li class="nav-item active">
                <router-link to="/first" class="nav-link">Startseite</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/challenge/create" class="nav-link">neue Challenge</router-link>
            </li>
        </ul>
        <button class="btn bg-vue2">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>
    </div>
  </nav>
</template>

<script>
export default {
    name: "TheNavbar"
}
</script>

<style scoped>
</style>