import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({ type = 'submit', value }) => {
  return <Button type={type} value={value} />
}

const Button = styled.input`
  display: inline-block;
  width: 100%;
  height: 4.3rem;
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorWhite};
  cursor: pointer;
  border: none;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;

  &:hover {
    border: 1px solid rgba(8, 7, 7, 0.4);
    background-color: #fff;
    color: ${(props) => props.theme.colorPrimary};
  }
`

export default SubmitButton
