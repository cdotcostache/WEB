import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <ButtonWrapper onClick={() => setIsOpen()} showMenu={isOpen}>
      <Burger isOpen={isOpen}></Burger>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease-ease-in-out;
  margin-left: 1rem;
  top: ${(props) => (props.showMenu ? '0.8rem' : '')};
`

const Burger = styled.div`
  width: 1.5rem;
  height: 0.1rem;
  background: #fff;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'none')};
  margin-bottom: ${(props) => (!props.isOpen ? '0.8rem' : '0')};

  &::before {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 0.1rem;
    border-radius: 0.5rem;
    background: #fff;
    transition: 0.2s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? 'rotate(270deg)' : 'translateY(0.5rem)'};
  }
`

export default MobileMenu
