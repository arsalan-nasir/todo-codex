import type { Filter, Todo, TodoCounts } from "../types.js";

export const getFilteredTodos = (todos: Todo[], filter: Filter): Todo[] => {
  if (filter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (filter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
};

export const getTodoCounts = (todos: Todo[]): TodoCounts => {
  const active = todos.filter((todo) => !todo.completed).length;
  const completed = todos.length - active;

  return {
    total: todos.length,
    active,
    completed,
  };
};
