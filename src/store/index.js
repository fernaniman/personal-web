import { createStore } from 'vuex';

import profileData from '../services/profileModel';
import projectsData from '../services/projectModel';

export default createStore({
  state: {
    profile: profileData,
    projects: projectsData,
  },
  mutations: {
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getProjects(state) {
      return state.projects;
    },
  },
  actions: {
  },
  modules: {
  },
});
