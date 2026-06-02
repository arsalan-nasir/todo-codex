import styled from "styled-components";

type StatCardProps = {
  label: string;
  value: number;
  tone: "slate" | "orange" | "emerald";
};

export function StatCard({ label, value, tone }: StatCardProps) {
  return (
    <Card $tone={tone}>
      <CardLabel>{label}</CardLabel>
      <CardValue>{value}</CardValue>
    </Card>
  );
}

const toneBackgrounds: Record<StatCardProps["tone"], string> = {
  slate: "#020617",
  orange: "#f97316",
  emerald: "#10b981",
};

const Card = styled.article<{ $tone: StatCardProps["tone"] }>`
  border-radius: 1.5rem;
  padding: 1.25rem;
  background: ${({ $tone }) => toneBackgrounds[$tone]};
  color: #ffffff;
`;

const CardLabel = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

const CardValue = styled.p`
  margin: 0.75rem 0 0;
  font-size: 1.875rem;
  font-weight: 900;
`;
