import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px 300px 20px 20px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: block;
  color: #111827;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px 10px;
  color: #111827;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const SubmitButton = styled.button`
  color: #111827;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;
