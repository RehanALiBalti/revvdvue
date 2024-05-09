// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    email: "danish@gmail.com",
    name: "danasd",
    role: null,
  },
  mutations: {
    setUser(state, { email, name, role }) {
      state.email = email;
      state.name = name;
      state.role = role;
    },
    logout(state) {
      state.email = "";
      state.name = "";
      state.role = null;
    },
  },
  actions: {
    signup({ commit }) {
      // For demo purposes, assign dummy values upon signup
      const email = "test@example.com";
      const name = "Test User";
      const role = "user";

      // Commit the setUser mutation with dummy values
      commit("setUser", { email, name, role });
    },
    logout({ commit }) {
      // Perform logout logic (e.g., clearing local storage)
      commit("logout");
    },
  },
  getters: {
    userEmail: (state) => state.email,
    userName: (state) => state.name,
    userRole: (state) => state.role,
  },
});

export default store;
