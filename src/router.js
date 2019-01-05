import Vue from 'vue';
import Router from 'vue-router';
import Todo from './components/Todo';
import About from './components/About';
import Quote from './components/Quote';

Vue.use(Router);

export default new Router({
	mode: history,
	routes: [
		{
			path: "/",
			name: 'home',
			component: Todo
		},
		{
			path: "/quote",
			name: "quote",
			component: Quote
		},
		{
			path: "/about/:name",
			name: 'about',
			component: About
		}
	]
})