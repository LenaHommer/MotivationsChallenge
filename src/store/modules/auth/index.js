import axios from "axios";

const state = {
        userId: null,
        token: null
    }
const mutations = {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
     },
    }
const actions = {
    auth(context, payload) {
        let url = "";
        if (payload.mode === "signin") {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADxtTydWoEDBMvQVVPgUpPfShVI3nbFow";
        } else if (payload.mode === "signup") {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADxtTydWoEDBMvQVVPgUpPfShVI3nbFow";
        } else {
            return;
        }
        
        const authDO = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        }

        return axios
    .post(url, authDO)
    .then((response) => {
        context.commit("setUser", {
            userId: response.data.localId,
            token: response.data.idToken,
        });
    })
    .catch((error) => {
        const errorMessage = new Error(
            error.response.data.error.message || "UNKNOWN_ERROR"
            );
        throw errorMessage;
    });
},
    signup(context, payload) {
        const signupDO = {
            ...payload,
            mode: "signup",
    };
    return context.dispatch("auth", signupDO);
},
    signin(context, payload) {
        const signinDO = {
            ...payload,
            mode: "signin",
        }
        return context.dispatch("auth", signinDO);
    },
}
const getters = {}

const authModule = {
    state,
    mutations,
    actions,
    getters,
}

export default authModule;