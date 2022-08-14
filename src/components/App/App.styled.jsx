import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px;
  width: 400px;
  margin: auto;
`;
export const Logo = styled.img`
  width: 200px;
  margin: 25px 0;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  &:hover, &:focus{
    background-color: #f2f5f3;
    outline: none;
    border: 2px solid #f2f5f3;
  }
`;
