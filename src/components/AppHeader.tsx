import type React from "react";
import styled from "styled-components";
import { StatsOverview } from "./StatsOverview.js";
import { TodoForm } from "./TodoForm.js";

type AppHeaderProps = {
  draft: string;
  total: number;
  active: number;
  completed: number;
  onDraftChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function AppHeader({
  draft,
  total,
  active,
  completed,
  onDraftChange,
  onSubmit,
}: AppHeaderProps) {
  return (
    <HeroPanel>
      <HeroGrid>
        <HeroContent>
          <Eyebrow>React + TypeScript</Eyebrow>
          <HeroCopy>
            <HeroTitle>Momentum Todo</HeroTitle>
            <HeroDescription>
              A simple todo application with local persistence, clean typing, and a
              focused workspace for daily execution.
            </HeroDescription>
          </HeroCopy>

          <TodoForm draft={draft} onDraftChange={onDraftChange} onSubmit={onSubmit} />
        </HeroContent>

        <StatsOverview total={total} active={active} completed={completed} />
      </HeroGrid>
    </HeroPanel>
  );
}

const HeroPanel = styled.section`
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(14px);
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    padding: 2.5rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  border: 1px solid #fed7aa;
  border-radius: 999px;
  background: #fff7ed;
  padding: 0.25rem 0.75rem;
  color: #c2410c;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HeroTitle = styled.h1`
  max-width: 40rem;
  margin: 0;
  color: #020617;
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const HeroDescription = styled.p`
  max-width: 40rem;
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.7;
`;
