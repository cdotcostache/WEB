import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/buy'>Buy</StyledLink>
      <StyledLink to='/sell'>Sell</StyledLink>
      <StyledLink to='/legit-check'>Legit check</StyledLink>
      <StyledLink to='/welcome'>Login</StyledLink>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  background: #151111;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2.5rem;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  transition: 0.3s;
  text-transform: lowercase;

  &:hover {
    background: #ffffff;
    color: #151111;
    transform: scale(1.1);
  }
`

export default Navbar
