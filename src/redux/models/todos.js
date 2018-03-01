const def = {
  defaultState: {
    todos: [],
    loading: false
  },
  actions: {
    addTodo: (draft, {todo}) => draft.todos.push(todo),
    addTodos: (draft, {todos}) => draft.todos = draft.todos.concat(todos),
    removeTodo: (draft, {index}) => draft.todos.splice(index, 1),
    setLoading: (draft, {loading}) => draft.loading = loading
  },
  asyncActions: {
    loadTodos: async (actions) => {
      actions.setLoading({loading:true});
      await wait(5000);
      actions.addTodos({todos: ['eat food', 'go to sleep']});
      actions.setLoading({loading: false});
    }
  }
}

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}

export default def;