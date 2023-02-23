<template>
   <TheLoginLayout 
   :columnClass="'col-xl-5 offset-xl-4 bg-vue'" 
   :fullsize="true">

    <template #col>
        <div class="mt-5 text-center">
            <div class="display-2 my-5">MotivationsChallenge</div>
            <div class="display-6 my-5">Bereit für deine nächste Challenge?</div>
        </div>
        <div class="my-5 offset-4 col-4">
                <component 
            :is="componentName" 
            @change-component="changeComponent">
            </component>
        </div>
    </template>
   </TheLoginLayout>
</template>

<script>
import TheLoginLayout from '../layouts/TheLoginLayout.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';


export default {
    name: "HomePage",
    components: {
        TheLoginLayout,
        Register,
        Login,
    },
    data() {
        return {
        componentName: "register",
        };
    },
     methods: {
        changeComponent(payload) {
            this.componentName = payload.componentName;
        },
    },
}
</script>

<style scoped>
</style>