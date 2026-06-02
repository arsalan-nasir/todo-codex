import type { Todo } from "../types.js";
import styled from "styled-components";
import { formatDate } from "../utils/todos.js";
import { TodoEditor } from "./TodoEditor.js";

type TodoItemProps = {
  editingId: string | null;
  editingValue: string;
  todo: Todo;
  onBeginEditing: (todo: Todo) => void;
  onCancelEditing: () => void;
  onEditingValueChange: (value: string) => void;
  onSaveEditing: (id: string) => void;
  onToggle: (id: string) => void;
};

export function TodoItem({
  editingId,
  editingValue,
  todo,
  onBeginEditing,
  onCancelEditing,
  onEditingValueChange,
  onSaveEditing,
  onToggle,
}: TodoItemProps) {
  const isEditing = editingId === todo.id;

  return (
    <TodoCard $completed={todo.completed}>
      <TodoLayout>
        <TodoMain>
          <ToggleButton
            type="button"
            onClick={() => onToggle(todo.id)}
            $completed={todo.completed}
            aria-label={todo.completed ? "Mark task as active" : "Mark task as complete"}
          >
            ✓
          </ToggleButton>

          <TodoContent>
            {isEditing ? (
              <TodoEditor
                value={editingValue}
                onValueChange={onEditingValueChange}
                onSave={() => onSaveEditing(todo.id)}
                onCancel={onCancelEditing}
              />
            ) : (
              <TodoDetails>
                <TodoTitle $completed={todo.completed}>{todo.title}</TodoTitle>
                <TodoMeta>
                  Created {formatDate(todo.createdAt)} • Updated {formatDate(todo.updatedAt)}
                </TodoMeta>
              </TodoDetails>
            )}
          </TodoContent>
        </TodoMain>

        {!isEditing ? (
          <TodoActions>
            <EditButton
              type="button"
              onClick={() => onBeginEditing(todo)}
            >
              Edit
            </EditButton>
          </TodoActions>
        ) : null}
      </TodoLayout>
    </TodoCard>
  );
}

const TodoCard = styled.article<{ $completed: boolean }>`
  border: 1px solid ${({ $completed }) => ($completed ? "#a7f3d0" : "#e2e8f0")};
  border-radius: 1.5rem;
  background: ${({ $completed }) =>
    $completed ? "rgba(236, 253, 245, 0.85)" : "#ffffff"};
  padding: 1rem;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;
`;

const TodoLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const TodoMain = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  gap: 0.75rem;
`;

const ToggleButton = styled.button<{ $completed: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
  border: 1px solid ${({ $completed }) => ($completed ? "#059669" : "#cbd5e1")};
  border-radius: 999px;
  background: ${({ $completed }) => ($completed ? "#059669" : "#ffffff")};
  color: ${({ $completed }) => ($completed ? "#ffffff" : "transparent")};
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({ $completed }) => ($completed ? "#059669" : "#fb923c")};
  }
`;

const TodoContent = styled.div`
  min-width: 0;
  flex: 1;
`;

const TodoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TodoTitle = styled.h3<{ $completed: boolean }>`
  margin: 0;
  color: ${({ $completed }) => ($completed ? "#064e3b" : "#0f172a")};
  font-size: 1rem;
  font-weight: 600;
  word-break: break-word;
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

const TodoMeta = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const TodoActions = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const EditButton = styled.button`
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: #ffffff;
  padding: 0.5rem 1rem;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 600;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    background-color 160ms ease;

  &:hover {
    border-color: #cbd5e1;
    color: #020617;
  }
`;
