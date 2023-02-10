import React from 'react'
import styled from 'styled-components'

function Button({children,onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button

const StyledButton = styled.button`
  width: 109px;
  height: 40px;
  background-color: rgb(25, 174, 159);
  color: white;
  text-align: center;
  border-radius: 10px;
  border: none;
`;