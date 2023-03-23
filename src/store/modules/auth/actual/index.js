const state = {
    actualChallenges: [],
};
const mutations = {
    addActualChallenge(state, payload) {
        state.actualItems.push(payload);
    },
};
const actions = {
    addChallengeToActual(context, payload) {
        context.commit("addActualChallenge",  {
            challengeId: payload.challengeId,
        });
    },
};
const getters = {
    actualChallenges: (state) => state.actualChallenges,
    actualTotal: (_, getters) => {
        const actualChallenges = getters.actualChallenges;
    },
};

const actualModule = {
    state,
    mutations,
    actions,
    getters
}
export default actualModule