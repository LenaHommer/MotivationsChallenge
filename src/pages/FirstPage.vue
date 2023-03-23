<template>
  <TheHomeLayout>
    <template #default>
      <div class="container-fluid">
        <div class="row">
        <div class="text-left text-vue2"><h4 class="mt-4">„Nichts ist hilfreicher als eine Herausforderung, um das Beste in einem Menschen hervorzubringen.“</h4></div>
        </div>
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