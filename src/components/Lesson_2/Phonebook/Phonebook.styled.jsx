import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  margin: 0 0 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  font-size: 16px;
  color: #333;
  background-color: #ecd9d9;
  border: solid 1px #01060c;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #d9c0c0;
    color: #000;
  }
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 350px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;
