import styled from "styled-components";

type TodoEditorProps = {
  value: string;
  onValueChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export function TodoEditor({
  value,
  onValueChange,
  onSave,
  onCancel,
}: TodoEditorProps) {
  return (
    <Editor>
      <EditorInput
        type="text"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <EditorActions>
        <SaveButton
          type="button"
          onClick={onSave}
        >
          Save
        </SaveButton>
        <CancelButton
          type="button"
          onClick={onCancel}
        >
          Cancel
        </CancelButton>
      </EditorActions>
    </Editor>
  );
}

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const EditorInput = styled.input`
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: #f8fafc;
  padding: 0.75rem 1rem;
  color: #0f172a;
  font-size: 0.875rem;
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
`;

const EditorActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SaveButton = styled.button`
  border: 0;
  border-radius: 999px;
  background: #020617;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;

  &:hover {
    background: #1e293b;
  }
`;

const CancelButton = styled.button`
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
