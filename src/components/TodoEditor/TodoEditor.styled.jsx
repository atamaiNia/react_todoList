import styled from 'styled-components';

export const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const FormTextarea = styled.textarea`
  padding: 5px 16px;
  resize: none;
  margin-bottom: 12px;
  box-shadow: 4px 4px rgb(0 0 0 / 15%);
`;
export const FormBtn = styled.button`
  background-color: rgb(8 107 228);
  width: 80px;
  height: 35px;
  padding: 5px;
  color: white;
  box-shadow: 4px 4px rgb(0 0 0 / 15%);
  margin-left: auto;
  margin-right: auto;
`;
