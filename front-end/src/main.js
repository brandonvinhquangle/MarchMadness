import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import mock from '../../data/mock-data.js'
import footer from './components/FooterComponent.vue'

Vue.config.productionTip = false

Vue.component('FooterComponent', footer)

let data = {
  chosenTeam: {
    id: null,
    name: String,
    record: String,
    conference: String,
    city: String,
    state: String,
    image: String
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')