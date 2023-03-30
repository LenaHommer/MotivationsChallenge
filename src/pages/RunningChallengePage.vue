<template>
    <TheHomeLayout>
    <template #default>
        <div class="row">
            <div class="col-3 m-3" v-for="challenge in challenges" :key="challenge.id">
                <ChallengeList :challenge="challenge"></ChallengeList>
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