import React, { useState, useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components/macro'

//SVG
import { ReactComponent as SearchIcon } from '../../assets/images/loupe.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/close.svg'

const SearchInput = ({ toggleSearch }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 500)
    }
  }, [])

  return (
    <SearchWrapper>
      <StyledSearchIcon small />
      <Input placeholder='Search sneakers...' ref={inputRef} />
      <StyledCloseIcon onClick={() => toggleSearch()} />
      <SearchResults>
        <h3>Quick links</h3>
        <p style={{ '--order': 1 }}>#WTB</p>
        <p style={{ '--order': 2 }}>#WTS</p>
        <p style={{ '--order': 3 }}>#WTT</p>
        <p style={{ '--order': 4 }}>legit check</p>
        <p style={{ '--order': 5 }}>jordan 4</p>
      </SearchResults>
    </SearchWrapper>
  )
}

const animation = keyframes`
    from {
        opacity: 0;
        transform: translateX(10rem);
    }

    to {
        opacity: 1;
        transform: none;
    }
`

const SearchResults = styled.div`
  position: absolute;
  top: 4.4rem;
  right: 0;
  left: 0;
  border-bottom-left-radius: 1.8rem;
  border-bottom-right-radius: 1.8rem;
  background-color: rgba(7, 8, 6, 0.8);
  overflow: hidden;
  z-index: 100;

  h3 {
    font-size: 1.2rem;
    line-height: 1.33;
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 3.5rem;
    animation: ${animation} ease-in-out 0.3s;
    animation-fill-mode: both;
    cursor: default;
  }

  p {
    font-size: 1.2rem;
    padding: 0.8rem 6rem;
    color: #fff;
    animation: ${animation} ease-in-out 0.3s;
    animation-fill-mode: both;
    animation-delay: calc(var(--order) * 0.03s);

    &:hover {
      background: #fff;
      cursor: pointer;
      color: var(--color-blue);

      &:last-of-type {
        border-bottom-left-radius: 1.8rem;
        border-bottom-right-radius: 1.8rem;
      }
    }
  }
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;
  position: relative;
`

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Search',
}))`
  background: #fff;
  width: 50rem;
  font-family: inherit;
  font-size: 1.1rem;
  color: #151111;
  outline: none;
  border: none;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem;
  animation: ${animation} ease-in-out 0.4s;
  animation-fill-mode: both;
  animation-delay: 0.1s;
  border-radius: 2rem;

  &::placeholder-shown {
    color: #151111;
  }
`

const StyledSearchIcon = styled(SearchIcon)`
  width: ${({ small }) => (small ? '1.6rem' : '1.8rem')};
  height: 4.4rem;
  fill: #fff;
  cursor: default;
  animation: ${animation} ease-in-out 0.4s;
  animation-fill-mode: both;
  animation-delay: 0.1s;
  margin-right: 1rem;
`

const StyledCloseIcon = styled(CloseIcon)`
  width: 1.6rem;
  height: 4.4rem;
  fill: #fff;
  cursor: pointer;
  animation: ${animation} ease-in-out 0.4s;
  animation-fill-mode: both;
  animation-delay: 0.1s;
  margin-left: 1rem;
`

export default SearchInput
