import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FirstPage from "@/pages/FirstPage";


const router = createRouter({
    //Optionen
    history: createWebHistory(),
    routes: [{
        path: "/",
        component: HomePage,
    },
    {
        path: "/first",
        component: FirstPage,
    },
  ],
});

export default router;