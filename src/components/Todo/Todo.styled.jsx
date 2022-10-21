import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: #e6e3e2;
  box-shadow: 4px 4px rgb(0 0 0 / 15%);
`;

export const TodoInput = styled.input`
  width: 17px;
  height: 17px;
  margin-right: 15px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  width: 140px;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const BtnDelete = styled.button`
  position: absolute;
  right: 25px;
  background-color: rgb(8 107 228);
  width: 80px;
  height: 35px;
  padding: 5px;
  color: white;
`;
