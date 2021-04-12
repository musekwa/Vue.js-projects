import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Hobbies from './components/Hobbies.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: About,  
  }, 
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/hobbies',
    component: Hobbies
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
