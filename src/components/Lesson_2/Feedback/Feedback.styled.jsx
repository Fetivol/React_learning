import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  gap: 10px;
`;
export const ListItem = styled.li`
  margin: 0;
`;
export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const StatsListItem = styled.li`
  margin: 0;
  font-size: 16px;
  color: #333;
`;
