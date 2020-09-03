import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchData() {
      try {
        const videos = (await axios.get('./state/data.json')).data
        return videos
      } catch (e) {
        throw e
      }
    },
    async fetchView() {
      try {
        const isGrid = localStorage.getItem('view')
        return isGrid === 'false' ? false : true
      } catch (e) {
        throw e
      }
    },
    setGrid({}, isGrid) {
      localStorage.setItem('view', isGrid)
      return isGrid
    }
  },
  modules: {
  }
})
