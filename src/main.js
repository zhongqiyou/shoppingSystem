import Vue from 'vue'
import ViewUI from "view-design";
import 'view-design/dist/styles/iview.css';
import router from "./router/router.js";
import App from './App.vue';


Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  router ,
  render: h => h(App),

}).$mount('#app')
