<template>
  <TheHomeLayout>
    <template #default>
        <div class="row">
            <div class="col-12">
                <h2 class="mt-4">
                    CHALLENGES für dich
                    <button class="btn bg-vue float-end">Starten</button>
                </h2>
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
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Modi asperiores earum distinctio facilis eius dolor neque voluptatibus necessitatibus. 
                                        Voluptatum tenetur eos adipisci excepturi quisquam animi error corrupti quod iusto quo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2 class="mt-4">
                    CHALLENGES im Team
                    <button class="btn bg-vue float-end">Starten</button>
                </h2>
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
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Modi asperiores earum distinctio facilis eius dolor neque voluptatibus necessitatibus. 
                                        Voluptatum tenetur eos adipisci excepturi quisquam animi error corrupti quod iusto quo.
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