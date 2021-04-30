import React from 'react'
import styled from 'styled-components'

export default function Select({
  name,
  names,
  id,
  placeholderName,
  registerForSelect,
  register,
}) {
  return (
    <StyledSelect name={name} id={id} key={name} ref={registerForSelect}>
      <Option
        disabled
        defaultValue
        value=""
        key='default'
        className="selectOption"
        name="default"
      >
        {placeholderName}
      </Option>
      {names.map((name) => (
          <Option
            value={name.split(' ').join('')}
            name={name.split(' ').join('')}
            key={name}
            className="selectOption"
            ref={register}
          >
            {name}
          </Option>
      ))}
    </StyledSelect>
  )
}

const StyledSelect = styled.select`
  border-radius: 4px;
  background: #001a83;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  width: 90%;
  font-size: 12px;
  padding: 0.5em 1em;
  color: rgb(236, 252, 255, 1);
  box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
`

const Option = styled.option`
  color: rgba(236, 252, 255, 0.3);
`
