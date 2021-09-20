import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'

//Components
import SearchInput from '../common/components/SearchInput'
import Bag from '../common/components/Bag'
import MobileMenu from '../common/components/MobileMenu'

//SVG
import { ReactComponent as SearchIcon } from '../assets/images/loupe.svg'
import { ReactComponent as BagIcon } from '../assets/images/shopping-bag.svg'

//Custom hooks
import useWindowDimensions from '../common/hooks/useWindowDimensions'

const Nav = () => {
  const location = useLocation()
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [menuItems, setMenuItems] = useState([
    'buy',
    'sell',
    'trade',
    ,
    'legit-check',
  ])

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
      {!isMobile &&
        menuItems.map((menuItem) => (
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

      {!isMobile && (
        <Link to='/welcome'>
          <GetStartedButton>Get started</GetStartedButton>
        </Link>
      )}

      {!isMobile && (
        <StyledListItem onClick={() => toggleSearch()}>
          <StyledSearchIcon />
        </StyledListItem>
      )}

      {isMobile && (
        <MobileMenu setIsOpen={() => toggleMenu()} isOpen={showMenu} />
      )}
    </StyledList>
  )

  return (
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
  align-items: ${(props) => (props.showMenu ? '' : 'center')};
  justify-content: ${(props) =>
    props.small ? 'space-between' : 'space-around'};
  width: 100%;
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
  font-style: ${({ isActive }) => (isActive ? 'italic' : 'normal')};
  text-decoration-color: ${({ isActive }) =>
    isActive ? '#fff' : 'transparent'};
  transition: 0.3s;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
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
