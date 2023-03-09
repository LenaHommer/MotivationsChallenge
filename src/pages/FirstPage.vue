<template>
  <TheHomeLayout>
    <template #default>
        <div class="row">
        <div class="text-center text-vue2"><h2 class="mt-4">„Nichts ist hilfreicher als eine Herausforderung, um das Beste in einem Menschen hervorzubringen.“</h2></div>
        </div>
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