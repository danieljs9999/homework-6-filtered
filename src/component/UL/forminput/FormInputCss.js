import styled from "styled-components";

export const LabelForminput = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 14px;
`;

export const InputForminput = styled.input`
  padding: 5px 10px 5px 20px;
  width: 300px;
  height: 39px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 16px;
  outline: none;

  &:invalid {
    outline: 1px solid red;
  }
  &:active {
    outline: 1px solid #3f3f3f;
  }
`;
