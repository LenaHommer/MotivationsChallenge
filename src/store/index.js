import { createStore } from "vuex";
import authModule from "./modules/auth";
import challengeModule from "./modules/auth/challenge";
//import profileModule from "./modules/auth/profile";

const store = createStore({
    modules: {
        auth: authModule,
        challenge: challengeModule,
        // profile: profileModule,

    },
});

export default store;