import type { Filter } from "../types.js";
import styled from "styled-components";
import { Panel, PanelHeader, PanelTitle } from "../styles/layout.js";

type ControlCenterProps = {
  counts: {
    total: number;
    active: number;
    completed: number;
  };
  filter: Filter;
  onClearCompleted: () => void;
  onFilterChange: (value: Filter) => void;
};

const filters: Filter[] = ["all", "active", "completed"];

export function ControlCenter({
  counts,
  filter,
  onClearCompleted,
  onFilterChange,
}: ControlCenterProps) {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Control Center</PanelTitle>
        <ClearButton
          type="button"
          onClick={onClearCompleted}
          disabled={counts.completed === 0}
        >
          Clear completed
        </ClearButton>
      </PanelHeader>

      <FiltersGrid>
        {filters.map((value) => {
          const count =
            value === "all"
              ? counts.total
              : value === "active"
                ? counts.active
                : counts.completed;

          return (
            <FilterButton
              key={value}
              type="button"
              onClick={() => onFilterChange(value)}
              $active={filter === value}
            >
              <FilterLabel>{value}</FilterLabel>
              <FilterCount>{count}</FilterCount>
            </FilterButton>
          );
        })}
      </FiltersGrid>
    </Panel>
  );
}

const ClearButton = styled.button`
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: transparent;
  padding: 0.375rem 0.75rem;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 600;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    opacity 160ms ease;

  &:hover:not(:disabled) {
    border-color: #cbd5e1;
    color: #0f172a;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const FiltersGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 1.25rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ $active }) => ($active ? "#020617" : "#e2e8f0")};
  border-radius: 1rem;
  background: ${({ $active }) => ($active ? "#020617" : "#f8fafc")};
  padding: 0.875rem 1rem;
  color: ${({ $active }) => ($active ? "#ffffff" : "#334155")};
  text-align: left;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({ $active }) => ($active ? "#020617" : "#cbd5e1")};
    background: ${({ $active }) => ($active ? "#020617" : "#ffffff")};
  }
`;

const FilterLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const FilterCount = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  opacity: 0.7;
  text-transform: uppercase;
`;
