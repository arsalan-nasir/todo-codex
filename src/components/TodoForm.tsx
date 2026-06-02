import type React from "react";
import styled from "styled-components";
import { SrOnly } from "../styles/layout.js";

type TodoFormProps = {
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function TodoForm({ draft, onDraftChange, onSubmit }: TodoFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <SrOnly htmlFor="todo-title">
        Add task
      </SrOnly>
      <Input
        id="todo-title"
        type="text"
        value={draft}
        onChange={(event) => onDraftChange(event.target.value)}
        placeholder="Add a task, checkpoint, or follow-up..."
      />
      <SubmitButton type="submit">
        Add task
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: #f8fafc;
  padding: 0 1rem;
  color: #0f172a;
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;

  &:focus {
    border-color: #fb923c;
    background: #ffffff;
    box-shadow: 0 0 0 4px #ffedd5;
  }

  @media (min-width: 640px) {
    flex: 1;
  }
`;

const SubmitButton = styled.button`
  height: 3.5rem;
  border: 0;
  border-radius: 1rem;
  background: #020617;
  padding: 0 1.5rem;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background-color 160ms ease;

  &:hover {
    background: #1e293b;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px #e2e8f0;
  }
`;
