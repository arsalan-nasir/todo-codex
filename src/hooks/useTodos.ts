import React from "react";
import type { Todo } from "../types.js";
import {
  createTodo,
  readTodos,
  saveTodos,
  updateTodoTimestamp,
} from "../utils/todos.js";

type TodoSubmitEvent = React.FormEvent<HTMLFormElement>;

type UseTodosResult = {
  todos: Todo[];
  draft: string;
  editingId: string | null;
  editingValue: string;
  setDraft: React.Dispatch<React.SetStateAction<string>>;
  setEditingValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (event: TodoSubmitEvent) => void;
  toggleTodo: (id: string) => void;
  beginEditing: (todo: Todo) => void;
  cancelEditing: () => void;
  saveEditing: (id: string) => void;
  clearCompleted: () => void;
};

export function useTodos(): UseTodosResult {
  const [todos, setTodos] = React.useState<Todo[]>(readTodos);
  const [draft, setDraft] = React.useState<string>("");
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editingValue, setEditingValue] = React.useState<string>("");

  React.useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (event: TodoSubmitEvent) => {
    event.preventDefault();
    const trimmedDraft = draft.trim();

    if (!trimmedDraft) {
      return;
    }

    setTodos((currentTodos) => [createTodo(trimmedDraft), ...currentTodos]);
    setDraft("");
  };

  const toggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? updateTodoTimestamp({
              ...todo,
              completed: !todo.completed,
            })
          : todo,
      ),
    );
  };

  const beginEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingValue(todo.title);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingValue("");
  };

  const saveEditing = (id: string) => {
    const trimmedValue = editingValue.trim();

    if (!trimmedValue) {
      return;
    }

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? updateTodoTimestamp({
              ...todo,
              title: trimmedValue,
            })
          : todo,
      ),
    );
    cancelEditing();
  };

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    draft,
    editingId,
    editingValue,
    setDraft,
    setEditingValue,
    addTodo,
    toggleTodo,
    beginEditing,
    cancelEditing,
    saveEditing,
    clearCompleted,
  };
}
