import Vue from 'vue';
import Vuex from 'vuex';
import getters from './store/getters';
import mutations from './store/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
		aboutText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		quote: {}
	},
	getters,
	mutations,
	actions: {
		toggleComplete({commit, getters}, index) {
			setTimeout(() => {		//simulate an asynchronous operation
				commit("TOGGLECOMPLETE", {getters, index} );
			} ,1500);
		},
		getQuote ({commit}) {
			fetch("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", {
				headers: {
					"Access-Control-Allow-Origin" : "*",
					"Content-type": "application/json"
				}
			})
			.then((res) => res.json())
			.then((data) => {
				commit("ADDQUOTE", data);
			})
			.catch((error) => {
				commit("ADDQUOTE", "Something wen wrong try again");
			})
		}
	}

});