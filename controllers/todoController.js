const Todo = require('../models/todoModel');

function getTodos(req, res) {
  res.json(Todo.getAllTodos());
}

function createTodo(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Todo title is required' });
  }

  const todo = Todo.createTodo(title);
  return res.status(201).json(todo);
}

function updateTodo(req, res) {
  const todo = Todo.updateTodo(req.params.id, req.body);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  return res.json(todo);
}

function deleteTodo(req, res) {
  const deleted = Todo.deleteTodo(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  return res.status(204).send();
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
