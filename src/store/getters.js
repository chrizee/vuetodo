export default {
	completedTodos: (state) => {
		return state.todos.filter((todo) => todo.isComplete);
	},
	inCompleteTodos: (state) => {
		return state.todos.filter((todo) => !todo.isComplete);
	},
	getTodoByIndex: (state) => (index) => state.todos[index],
	completedTodosCount: (state, getters) => {	//getters will receive other getters as second argument
		return getters.completedTodos.length;
	},
	inCompleteTodosCount(state, getters) {
		return getters.inCompleteTodos.length;
	},
	areAllCompleted: (state) => {
		return state.todos.filter((todo) => todo.isComplete).length == state.todos.length;
	},
	aboutText: (state) => {
		return state.aboutText;
	}
}