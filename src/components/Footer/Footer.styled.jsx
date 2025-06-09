import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;
