import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-vue-resource-8c130-default-rtdb.firebaseio.com/users.json";


new Vue({
  el: '#app',
  render: h => h(App)
})
