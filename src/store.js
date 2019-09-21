import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "flavored-md",
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],

  state: {
    editor: {
      markdown: "",
      html: ""
    },
    flavor: "github"
  },

  mutations: {
    setMarkdown(state, payload) {
      state.editor.markdown = payload;
    },

    setHTML(state, payload) {
      state.editor.html = payload;
    },

    setFlavor(state, payload) {
      state.flavor = payload;
    }
  },

  actions: {
    storeMarkdown({ commit }, payload) {
      commit("setMarkdown", payload.value);
    },

    storeHTML({ commit }, payload) {
      commit("setHTML", payload.value);
    },

    storeFlavor({ commit }, payload) {
      commit("setHTML", payload.value);
    }
  },

  getters: {
    editor(state) {
      return state.editor;
    },

    markdown(state) {
      return state.editor.markdown;
    },

    html(state) {
      return state.editor.html;
    },

    flavor(state) {
      return state.flavor;
    }
  }
});
