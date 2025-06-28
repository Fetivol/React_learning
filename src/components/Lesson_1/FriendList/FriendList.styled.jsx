import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 20px auto;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0eeee;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 10px;
  }

  p {
    flex-grow: 1;
    margin: 0;
    font-size: 1rem;
    color: #333;
  }

  span {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;
