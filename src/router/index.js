import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FirstPage from "@/pages/FirstPage";
import CreateChallengePage from "@/pages/CreateChallengePage";
import RunningChallengePage from "@/pages/RunningChallengePage";
import Profile from "@/pages/Profile";

import store from "../store";


const router = createRouter({
    //Optionen
    history: createWebHistory(),
    routes: [{
        path: "/",
        component: HomePage,
        beforeEnter: (to, from, next) => {
           if(store.getters.isAuthenticated) {
            next("/first");
           } else {
            next();
           }
        },
    },
    {
        path: "/first",
        component: FirstPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path:"/create/challenge",
        component: CreateChallengePage,
    },
    {
        path:"/running/challenge",
        component: RunningChallengePage,
    },
    {
        path:"/profile",
        component: Profile,
    },
  ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/");
    } else {
    next();
    }
});

export default router;