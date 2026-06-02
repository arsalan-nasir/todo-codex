import { AppHeader } from "./components/AppHeader.js";
import { ControlCenter } from "./components/ControlCenter.js";
import { TaskList } from "./components/TaskList.js";
import { useTodoFilter } from "./hooks/useTodoFilter.js";
import { useTodos } from "./hooks/useTodos.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import {
  AppShell,
  AppShellContainer,
  AppShellContent,
} from "./styles/layout.js";

export function App() {
  const {
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
  } = useTodos();

  const { filter, counts, filteredTodos, setFilter } = useTodoFilter(todos);

  return (
    <>
      <GlobalStyle />
      <AppShell>
        <AppShellContainer>
        <AppHeader
          draft={draft}
          total={counts.total}
          active={counts.active}
          completed={counts.completed}
          onDraftChange={setDraft}
          onSubmit={addTodo}
        />

        <AppShellContent>
          <ControlCenter
            counts={counts}
            filter={filter}
            onClearCompleted={clearCompleted}
            onFilterChange={setFilter}
          />
          <TaskList
            editingId={editingId}
            editingValue={editingValue}
            todos={filteredTodos}
            onBeginEditing={beginEditing}
            onCancelEditing={cancelEditing}
            onEditingValueChange={setEditingValue}
            onSaveEditing={saveEditing}
            onToggle={toggleTodo}
          />
        </AppShellContent>
        </AppShellContainer>
      </AppShell>
    </>
  );
}
