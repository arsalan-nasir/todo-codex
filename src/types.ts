export type Filter = "all" | "active" | "completed";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TodoCounts = {
  total: number;
  active: number;
  completed: number;
};
