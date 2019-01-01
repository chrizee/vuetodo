export default {
	ADDTODO(state, payload) {
		state.todos.unshift({name: payload, isComplete: false});
  		localStorage.setItem('items', JSON.stringify(state.todos));
	},
	REMOVETODO: (state, index) => {
		state.todos.splice(index, 1);
  		localStorage.setItem('items', JSON.stringify(state.todos));
	},
	TOGGLECOMPLETE: (state, payload) => {
		payload.getters.getTodoByIndex(payload.index).isComplete = !payload.getters.getTodoByIndex(payload.index).isComplete;
  		localStorage.setItem('items', JSON.stringify(state.todos));
	},
	TOGGLEALL: (state, payload) => {
		state.todos.map((item) => item.isComplete = payload);		//map through all todos and set their complete state based on the value of the checkbox
  		localStorage.setItem('items', JSON.stringify(state.todos));
	},
	ADDQUOTE(state, payload) {
		//let use = payload.contents.quotes[0]
		state.quote = {body: payload.quoteText, author: payload.quoteAuthor};
	}
}