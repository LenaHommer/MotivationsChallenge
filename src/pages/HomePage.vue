<template>
   <TheLoginLayout 
   :columnClass="'col-12 bg-vue'" 
   :fullsize="true">

    <template #col>
        <div class="mt-5 text-center">
            <div class="display-1"><strong>mydiscipline</strong></div>
            <div class="display-7 mb-5">Bereit für deine nächste Challenge?</div>
        </div>
            <component 
            :is="componentName" 
            @change-component="changeComponent">
            </component>
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