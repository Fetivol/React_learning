import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 100%;
  max-width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const TaskName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;

  h4 {
    margin: 0;
    font-size: 18px;
    color: #333;
    &.completed {
      text-decoration: line-through;
      color: #8c8c8c;
    }
  }
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #d1868680;
  }
`;

export const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  li {
    background-color: #ecd9d9;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    color: #555;
    &:hover {
      background-color: #fad0d0;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px;
  background-color: transparent;
  border: solid 1px #01060c;
  border-radius: 6px;
  cursor: pointer;
  color: #000;
  font-size: 20px;
  &:hover {
    color: #d1868680;
  }
  transition: color 0.3s ease;

  &:focus,
  &:active {
    color: #d1868680;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 0 auto;
`;
export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #d1868680;
    outline: none;
  }
`;
export const Textarea = styled.textarea`
  max-width: 300px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  &:focus {
    border-color: #d1868680;
    outline: none;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
