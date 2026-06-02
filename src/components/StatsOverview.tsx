import styled from "styled-components";
import { StatCard } from "./StatCard.js";

type StatsOverviewProps = {
  total: number;
  active: number;
  completed: number;
};

export function StatsOverview({ total, active, completed }: StatsOverviewProps) {
  return (
    <StatsGrid>
      <StatCard label="Total tasks" value={total} tone="slate" />
      <StatCard label="Active" value={active} tone="orange" />
      <StatCard label="Completed" value={completed} tone="emerald" />
    </StatsGrid>
  );
}

const StatsGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
