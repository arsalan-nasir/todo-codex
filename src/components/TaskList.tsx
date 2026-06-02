import type { Todo } from "../types.js";
import styled from "styled-components";
import { Panel, PanelHeader, PanelTitle } from "../styles/layout.js";
import { TaskListEmptyState } from "./TaskListEmptyState.js";
import { TodoItem } from "./TodoItem.js";

type TaskListProps = {
  editingId: string | null;
  editingValue: string;
  todos: Todo[];
  onBeginEditing: (todo: Todo) => void;
  onCancelEditing: () => void;
  onEditingValueChange: (value: string) => void;
  onSaveEditing: (id: string) => void;
  onToggle: (id: string) => void;
};

export function TaskList({
  editingId,
  editingValue,
  todos,
  onBeginEditing,
  onCancelEditing,
  onEditingValueChange,
  onSaveEditing,
  onToggle,
}: TaskListProps) {
  return (
    <Panel>
      <PanelHeader>
        <div>
          <PanelTitle>Tasks</PanelTitle>
          <TaskCount>
            {todos.length} item{todos.length === 1 ? "" : "s"} in view
          </TaskCount>
        </div>
      </PanelHeader>

      <TaskListContent>
        {todos.length === 0 ? (
          <TaskListEmptyState />
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              editingId={editingId}
              editingValue={editingValue}
              todo={todo}
              onBeginEditing={onBeginEditing}
              onCancelEditing={onCancelEditing}
              onEditingValueChange={onEditingValueChange}
              onSaveEditing={onSaveEditing}
              onToggle={onToggle}
            />
          ))
        )}
      </TaskListContent>
    </Panel>
  );
}

const TaskCount = styled.p`
  margin: 0.25rem 0 0;
  color: #64748b;
  font-size: 0.875rem;
`;

const TaskListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
`;
