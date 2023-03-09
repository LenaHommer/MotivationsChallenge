<template>
  <TheHomeLayout>
    <template #default>
        <div class="row">
            <div class="col-12">
                <h1 class="mt-4">
                    neue Challenge 
                    <button class="btn btn-lg bg-vue float-end">Starten</button>
                </h1>
                <div class="card mt-4">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="@/assets/mountain.jpg" class="card-img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="h5 card-title mb-4">ChallengeName</div>
                                    </div>
                                    <div class="col-3">
                                        <div class="d-grid">
                                            <div class="button btn bg-vue2">accept</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        Beschreibung
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
  </TheHomeLayout>
</template>

<script>
import TheHomeLayout from '../layouts/TheHomeLayout.vue';

export default {
    name:"CreateChallengePage",
    components: {
        TheHomeLayout,
    },
};
</script>

<style scoped>
</style>