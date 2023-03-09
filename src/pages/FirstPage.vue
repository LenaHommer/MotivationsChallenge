<template>
  <TheHomeLayout>
    <template #default>
        <h2>Hallo</h2>
    </template>
  </TheHomeLayout>
</template>

<script>
import TheHomeLayout from '../layouts/TheHomeLayout.vue';

export default {
    name: "FirstPage",
    components: {
        TheHomeLayout,
    },
};
</script>

<style scoped>
</style>