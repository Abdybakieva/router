import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <StyledH1>LOGO</StyledH1>
      <nav>
        <StyledList>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0a0a0a" : "white",
                textDecoration: isActive ? "none" : "none",
              })}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0a0a0a" : "white",
                textDecoration: isActive ? "none" : "none",
              })}
              to="/myCard"
            >
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#0a0a0a" : "white",
                textDecoration: isActive ? "none" : "none",
              })}
              to="/myOrders"
            >
              My Orders
            </NavLink>
          </li>
        </StyledList>
      </nav>
    </Container>
  );
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(44, 136, 217);
  width: 100%;
  height: 80px;
`;

const StyledH1=styled.h1`
    color: white;
`
const StyledList = styled.li`
  display: flex;
  /* justify-content: space-between; */
  gap: 8rem;
  list-style: none;
  text-decoration: none;
  li {
    font-size: 1.3rem;
    color: white;
  }
`;