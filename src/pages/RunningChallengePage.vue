<template>
    <TheHomeLayout>
    <template #default>
        <div class="container mt-4">
            <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-4" v-for="challenge in challenges" :key="challenge.id">
                <ChallengeList :challenge="challenge"></ChallengeList>
                </div>
            </div>
        </div>
    </template>
    </TheHomeLayout>
</template>

<script>
import TheHomeLayout from "@/layouts/TheHomeLayout.vue";
import ChallengeList from "@/components/ChallengeList.vue";

export default {
    name: "RunningChallengePage",
    components: {
        TheHomeLayout,
        ChallengeList,
    },
    computed: {
        challenges() {
            return this.$store.getters.challenges;
        }
    }
}
</script>

<style scoped>
</style>