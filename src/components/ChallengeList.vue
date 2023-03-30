<template>
<div class="card">
    <img src="@/assets/mountain.jpg" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">{{ challenge.title }}</h5>
        <p class="card-text">{{ shortendDiscription }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "ChallengeList",
    props: {
        challenge: Object,
    },
    computed: {
        shortendDiscription() {
            if (this.challenge.description.length < 80) {
                return this.challenge.description;
            }
            return this.challenge.description.slice(0, 80)+ "..."; 
        }
    }
};
</script>

<style scoped>

</style>


