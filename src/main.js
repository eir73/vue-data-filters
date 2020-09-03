import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import titleFilter from './filters/title.filter'
import categoryFilter from './filters/category.filter'

Vue.config.productionTip = false
Vue.filter('title', titleFilter)
Vue.filter('category', categoryFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
