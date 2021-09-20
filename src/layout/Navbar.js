import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'

//Components
import SearchInput from '../common/components/SearchInput'
import MobileMenu from '../common/components/MobileMenu'

//SVG
import { ReactComponent as SearchIcon } from '../assets/images/loupe.svg'

//Custom hooks
import useWindowDimensions from '../common/hooks/useWindowDimensions'

const Nav = () => {
  const location = useLocation()
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [menuItems, setMenuItems] = useState(['want to buy', 'want to sell'])

  const { height, width } = useWindowDimensions()
  const isMobile = width <= 767

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const RenderMenuItems = (
    <StyledList small={isMobile} showMenu={showMenu}>
      <StyledLogo to='/'>snkrs.market</StyledLogo>
      <LinkContainer>
        {menuItems.map((menuItem) => (
          <StyledListItem>
            <StyledLink
              to={`/${menuItem.replaceAll(' ', '-')}`}
              isActive={
                location.pathname === `/${menuItem.replaceAll(' ', '-')}`
              }
            >
              {menuItem}
            </StyledLink>
          </StyledListItem>
        ))}

        <StyledListItem onClick={() => toggleSearch()}>
          <StyledSearchIcon />
        </StyledListItem>

        <Link to='/welcome'>
          <GetStartedButton>Get started</GetStartedButton>
        </Link>
      </LinkContainer>
    </StyledList>
  )

  return isMobile ? (
    <MobileMenu setIsOpen={() => toggleMenu()} isOpen={showMenu} />
  ) : (
    <NavContainer showMenu={showMenu}>
      {showSearch ? (
        <SearchInput toggleSearch={() => toggleSearch()} />
      ) : (
        RenderMenuItems
      )}
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: sticky;
  width: 100%;
  height: ${(props) => (props.showMenu ? '100vh' : '4.4rem')};
  background: #151111;
  display: flex;
  justify-content: ${(props) => (props.showMenu ? '' : 'center')};
  align-items: ${(props) => (props.showMenu ? '' : 'center')};
  transition: all 0.3s ease-in-out;
  z-index: 10;
`

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 102rem;
  margin: 0 2rem;
`

const StyledLogo = styled(Link)`
  font-family: inherit;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 51rem;
`

const StyledListItem = styled.li`
  list-style-type: none;
  color: var(--color-gray-medium);
  font-size: 14px;
  cursor: pointer;
  position: relative;
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -0.1rem;
    display: block;
    width: 100%;
    height: 1px;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    background: ${(props) =>
      props.isActive ? props.theme.colorTertiary : props.theme.colorWhite};
    transition: 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &::before {
    transform: scaleX(0);
    transform-origin: left;
  }

  &::after {
    transform-origin: right;
    transition-delay: 0.25s;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scaleX(1);
      transition-delay: 0.25s;
    }

    &::after {
      opacity: 1;
      transform: scaleX(0);
      transition-delay: 0s;
    }
  }
`

const StyledSearchIcon = styled(SearchIcon)`
  width: 1.8rem;
  height: 4.4rem;
  fill: #fff;
  cursor: pointer;
`

const GetStartedButton = styled.button`
  padding: 0.8rem 1.5rem;
  color: #151111;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s;
  background: linear-gradient(#fff, #fff) no-repeat, #151111;
  background-size: 100% 100%;
  background-position: center;
  font-family: inherit;
  font-size: 1.1rem;
  text-transform: uppercase;

  &:hover {
    background-size: 100% 0%; /* Or 100% 0% */
    color: #fff;
    transform: scale(1.1);
  }
`

export default Nav
