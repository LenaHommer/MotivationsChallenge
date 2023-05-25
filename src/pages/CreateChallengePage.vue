<template>
  <TheHomeLayout>
    <template #default>
        <div class="row">
            <div class="mt-16 col-12">
                <h3 class="mt-4">
                    Challenges für dich
                </h3>
                <div class="card mt-4">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="@/assets/mountain.jpg" class="card-img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="h5 card-title mb-4">{{ challenge.title }}</div>
                                    </div>
                                    <div class="col-3">
                                        <div class="d-grid">
                                            <button class="btn bg-vue2" @click="createChallenge()">accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">{{ challenge.description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3 class="mt-4">
                    Challenges im Team
                </h3>
                <div class="card mt-4">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="@/assets/mountain.jpg" class="card-img">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="h5 card-title mb-4">{{ challenge.title }}</div>
                                    </div>
                                    <div class="col-3">
                                        <div class="d-grid">
                                            <button class="btn bg-vue2" @click="createChallenge()">accept</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">{{ challenge.description }}</div>
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
    data() {
        return {
            challenge: {
                title: "ChallengeName",
                description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Modi asperiores earum distinctio facilis eius dolor neque voluptatibus necessitatibus. 
                            Voluptatum tenetur eos adipisci excepturi quisquam animi error corrupti quod iusto quo.`
            },
        };
    },
    methods: {
        createChallenge() {
            this.$store.dispatch("storeChallenge", this.challenge);
        }
    }
};
</script>

<style scoped>
</style>