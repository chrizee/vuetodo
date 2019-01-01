import Vue from 'vue';
import App from './App.vue';
//import Todo from './components/Todo.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import store from './store';

Vue.use(VeeValidate);
//globally registering a component- you can use this in any other component without importing it in that component 
//Vue.component("Todo", Todo);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
