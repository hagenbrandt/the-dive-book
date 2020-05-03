import React from 'react'
import styled from 'styled-components'

const Radio = ({ name, labelID, categories, children, id, register }) => (
  <RadioWrapper>
    {categories.map((category) => (
      <Label htmlFor={id} id={category}>
        <Input type="radio" name={name} id={category} value={category} ref={register} />
        <Mark />
        <Text>{category}</Text>
      </Label>
    ))}
  </RadioWrapper>
)

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
`

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: none;
  width: 24px;
  height: 24px;
  left: 0;
  border-radius: 50%;
  background: #001a83;
  box-shadow: inset -3px -3px 5px #00166f, inset 3px 3px 5px #001e97;
  &::after {
    content: '';
    display: block;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #001a83;
    box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: relative;
    transition: all 110ms;
  }
`

const Input = styled.input`
  position: relative;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 18px;
      height: 18px;
      opacity: 1;
      left: 12%;
      top: 10%;
    }
  }
`

const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${(props) =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`

const Text = styled.span`
  margin-left: 2px;
  color: rgb(236, 252, 255, 1);
`

export default Radio
