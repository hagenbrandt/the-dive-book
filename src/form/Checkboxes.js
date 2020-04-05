import React from 'react'
import styled from 'styled-components'

const Checkbox = ({ name, id, register }) => (
  <Label>
    <Input type="checkbox" name={name} id={id} ref={register} />
    <Text>{name}</Text>
  </Label>
)

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
`

const Text = styled.span`
  color: #3e64ff;
  padding: 0.5rem 0.25rem;
`

const Input = styled.input`
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid rgba(0, 37, 185, 0.2);
  border-radius: 6px;
  outline: none;
  transition-duration: 0.3s;
  background: linear-gradient(145deg, #001c8c, #001776);
  box-shadow: 5px 5px 10px rgba(0, 15, 77, 1),
    -5px -5px 10px rgba(0, 37, 185, 1);
  cursor: pointer;

  &:checked {
    background: #000d41;
    box-shadow: inset 3px 3px 4px #000a31, inset -3px -3px 4px #001051;
  }

  &:checked + ${Text}::before {
    content: '\2713';
    display: block;
    text-align: center;
    color: #41b883;
    left: 0.7rem;
    top: 0.2rem;
  }

  &:active {
    /* border: 2px solid #34495e; */
  }
`

export default Checkbox
