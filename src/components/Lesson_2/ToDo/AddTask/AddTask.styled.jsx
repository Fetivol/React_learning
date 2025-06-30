import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const Label = styled.label`
  font-size: 16px;
  color: #333;
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

export const Button = styled.button`
  max-width: 100px;
  padding: 5px;
  background-color: #ecd9d9;
  color: #333;
  border: solid 1px #01060c;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #d9c0c0;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(209, 134, 134, 0.5);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
