import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  max-width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  &.completed {
    text-decoration: line-through;
    color: #999;
  }
`;
