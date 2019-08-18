import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editor: {
      markdown: "",
      html: ""
    }
  },

  mutations: {
    setMarkdown(state, payload) {
      state.editor.markdown = payload;
    },

    setHTML(state, payload) {
      state.editor.html = payload;
    }
  },

  actions: {
    storeMarkdown({ commit }, payload) {
      commit("setMarkdown", payload.value);
    },

    storeHTML({ commit }, payload) {
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
    }
  }
});
