import React from "react";
import styled from "styled-components";

function Button(props) {
  const { title, onClick } = props;
  return (
    <div>
      <ButtonCss onClick={onClick}>{title}</ButtonCss>
    </div>
  );
}
export default Button;

const ButtonCss = styled.button`
  background-color: #4a026b;
  color: white;
  border-radius: 10px;
  padding: 0px 20px 0px 20px;
  height: 51px;
  border: none;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background-color: #600a87;
  }

  &:active {
    background-color: #520b73;
  }
`;
