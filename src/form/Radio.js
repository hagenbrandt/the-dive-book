import React from 'react'
import styled from 'styled-components'

const Radio = ({ name, children, id, register }) => (
  <RadioWrapper>
    <Label>
      <Input type="radio" name={name} id={id} ref={register} />
      <Mark />
      <Text>{children}</Text>
    </Label>
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
  /* margin-right: 4px;
  margin-left: 4px; */
  /* margin-right: 5px; */
  background: linear-gradient(70deg, #001776, #001c8c);
  box-shadow: 3px 3px 4px #001464, -3px -3px 4px #0020a2;
  /* vertical-align: middle; */
  &::after {
    content: '';
    display: block;
    border: none;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #001a83;
    box-shadow: inset 3px 3px 4px #001464, inset -3px -3px 4px #0020a2;
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
  /* padding: 5px 10px 5px 0; */
  position: relative;
  ${props =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`

const Text = styled.span`
  margin-left: 2px;
`

export default Radio
