import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 0 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 150px;
  font-size: 16px;
  &:focus {
    border-color: #d1868680;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 150px;
  font-size: 16px;
  &:focus {
    border-color: #d1868680;
    outline: none;
  }
`;
export const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-right: 10px;
`;
