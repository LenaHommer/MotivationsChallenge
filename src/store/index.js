import { createStore } from "vuex";
import authModule from "./modules/auth";
import challengeModule from "./modules/auth/challenge";

const store = createStore({
    modules: {
        auth: authModule,
        challenge: challengeModule,

    },
});

export default store;