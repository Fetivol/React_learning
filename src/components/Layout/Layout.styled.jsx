import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
