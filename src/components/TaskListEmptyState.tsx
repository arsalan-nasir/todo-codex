import styled from "styled-components";

export function TaskListEmptyState() {
  return (
    <EmptyState>
      <EmptyTitle>No tasks here yet.</EmptyTitle>
      <EmptyCopy>
        Add a new task or switch filters to see the rest of your list.
      </EmptyCopy>
    </EmptyState>
  );
}

const EmptyState = styled.div`
  border: 1px dashed #e2e8f0;
  border-radius: 1.5rem;
  background: #f8fafc;
  padding: 3rem 1.5rem;
  text-align: center;
`;

const EmptyTitle = styled.p`
  margin: 0;
  color: #334155;
  font-size: 1rem;
  font-weight: 600;
`;

const EmptyCopy = styled.p`
  margin: 0.5rem 0 0;
  color: #64748b;
  font-size: 0.875rem;
`;
