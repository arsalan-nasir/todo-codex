import styled from "styled-components";

export const AppShell = styled.main`
  min-height: 100vh;
  padding: 2.5rem 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const AppShellContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const AppShellContent = styled.section`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 0.9fr 1.1fr;
  }
`;

export const Panel = styled.section`
  border: 1px solid #e2e8f0;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.25rem;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: #020617;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
