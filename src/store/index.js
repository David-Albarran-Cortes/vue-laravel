import { createStore } from "vuex";

export const store = createStore({
    state: {
        auth: null,
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth;
        },
    },

    actions: {
        // totmamos los datos de usuario del local storage
        setAuth({ commit }) {
            if (localStorage.getItem("auth")) {
                commit("setAuth", JSON.parse(localStorage.getItem("auth")));
            }
        },

        logout() {
            localStorage.removeItem("auth");
            location.reload();
        }

    },
});