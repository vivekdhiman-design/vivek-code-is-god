let todos = [];
let nextId = 1;

function getAllTodos() {
  return todos;
}

function createTodo(title) {
  const todo = {
    id: nextId++,
    title,
    completed: false
  };

  todos.push(todo);
  return todo;
}

function updateTodo(id, updates) {
  const todo = todos.find((item) => item.id === Number(id));

  if (!todo) {
    return null;
  }

  Object.assign(todo, updates);
  return todo;
}

function deleteTodo(id) {
  const index = todos.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  todos.splice(index, 1);
  return true;
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
