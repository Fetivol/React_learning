import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px 0 0 0;
  background-color: #f0eeee;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const ListElement = styled.li`
  background-color: ${props => props.bgColor || '#ccc'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  flex: 1;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }

  span {
    color: #555;

    &:first-child {
      font-size: 1rem;
      font-weight: bold;
    }
    &:last-child {
      font-size: 1.2rem;
      color: #888;
    }
  }
`;
