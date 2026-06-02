import type { Todo } from "../types.js";

export const STORAGE_KEY = "momentum-todos";

export const formatDate = (value: string): string =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));

export const generateTodoId = (): string => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `todo-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const createTodo = (title: string): Todo => {
  const timestamp = new Date().toISOString();

  return {
    id: generateTodoId(),
    title: title.trim(),
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const updateTodoTimestamp = (todo: Todo): Todo => ({
  ...todo,
  updatedAt: new Date().toISOString(),
});

export const isTodo = (value: unknown): value is Todo => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<Todo>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.completed === "boolean" &&
    typeof candidate.createdAt === "string" &&
    typeof candidate.updatedAt === "string"
  );
};

export const readTodos = (): Todo[] => {
  const storedValue = window.localStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return [];
  }

  try {
    const parsed = JSON.parse(storedValue) as unknown;
    return Array.isArray(parsed) ? parsed.filter(isTodo) : [];
  } catch (error: unknown) {
    console.error("Failed to read todos from localStorage.", error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error: unknown) {
    console.error("Failed to save todos to localStorage.", error);
  }
};
