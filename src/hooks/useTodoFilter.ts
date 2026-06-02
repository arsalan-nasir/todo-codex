import React from "react";
import type { Filter, Todo, TodoCounts } from "../types.js";
import { getFilteredTodos, getTodoCounts } from "../utils/todoSelectors.js";

type UseTodoFilterResult = {
  filter: Filter;
  counts: TodoCounts;
  filteredTodos: Todo[];
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export function useTodoFilter(todos: Todo[]): UseTodoFilterResult {
  const [filter, setFilter] = React.useState<Filter>("all");
  const counts = getTodoCounts(todos);
  const filteredTodos = getFilteredTodos(todos, filter);

  return {
    filter,
    counts,
    filteredTodos,
    setFilter,
  };
}
