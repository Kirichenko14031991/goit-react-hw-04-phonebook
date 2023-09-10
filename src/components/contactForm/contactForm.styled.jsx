import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #16c8f5;
  padding: 20px;
  border: 30px solid #fdd807;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  border: 5px solid #faf9f6;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 4px;
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
