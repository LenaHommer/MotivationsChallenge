<template>
  <TheHomeLayout>
    <template #default>
      <div class="container-fluid">
        <div class="row">
          <v-card
          class="mt-16 mx-auto"
          >
            <v-card-text>
              <div class="text-left text-vue2"><h4 class="mt-4">„Nichts ist hilfreicher als eine Herausforderung, um das Beste in einem Menschen hervorzubringen.“</h4></div>
            </v-card-text>
          </v-card>
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