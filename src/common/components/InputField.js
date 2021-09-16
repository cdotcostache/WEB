import React from 'react'
import styled from 'styled-components'

const InputField = ({
  type = 'text',
  minLength = '4',
  autocomplete = 'off',
  required = true,
  placeholder = '',
  label,
  value,
  onChange,
}) => {
  return (
    <InputWrap>
      <Input
        type={type}
        minLength={minLength}
        autocomplete={autocomplete}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputLabel>{label}</InputLabel>
    </InputWrap>
  )
}

const InputWrap = styled.div`
  position: relative;
  height: 3.7rem;
  margin-bottom: 2rem;
`
const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.colorTertiary};
  padding: 0;
  font-size: 0.95rem;
  color: ${(props) => props.theme.colorPrimary};
  transition: 0.3s;

  &:focus {
    border-bottom-color: ${(props) => props.theme.colorPrimary};
  }
`

const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: ${(props) => props.theme.colorTertiary};
  pointer-events: none;
  transition: 0.3s;

  ${Input}:not(:placeholder-shown) ~ & {
    font-size: 0.75rem;
    top: -0.2rem;
  }
`

export default InputField
