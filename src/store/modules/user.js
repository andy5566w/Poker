export const namespaced = true;

export const state = {
    user: {}
}

export const mutations = {
    STORE_USER(state, user){
        state.user = user
    }
}

export const actions = {
    storeUser({commit}, user) {
        commit("STORE_USER", user)
    }
}