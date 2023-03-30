import axios from "axios";

const state = {
    challenges: [],
};
const mutations = {
    setChallenges(state, payload) {
        state.challenges = payload;
    },
    addChallenge(state, payload) {
        state.challenges.push(payload);
        axios.get(``)
    },
};
const actions = {
    fetchChallenges(context) {
        const token = context.rootState.auth.token;
        axios.get(`https://motivationschallenge-default-rtdb.europe-west1.firebasedatabase.app/challenges.json?auth=${token}`
        ).then((response) => {
            const challengesDO = []
            for (const id in response.data) {
                challengesDO.push({
                    id: id,
                    ...response.data[id],
                });
            }
            context.commit("setChallenges", challengesDO);
        }).catch((error) => {
            console.log(error);
        });
    },
    storeChallenge(context, payload) {
        const challengeItem = {
        title: payload.title,
        description: payload.description,
        };
        const token = context.rootState.auth.token;
        axios
        .post(`https://motivationschallenge-default-rtdb.europe-west1.firebasedatabase.app/challenges.json?auth=${token}`, 
        challengeItem
        )
        .then((response) => {
            console.log(response);
          })
          .catch((error) => {
           throw new Error(error);
          });
    },
};
const getters = {
    challenges: (state) => state.challenges,
};

const challengeModule = {
    state,
    mutations,
    actions,
    getters
};

export default challengeModule;