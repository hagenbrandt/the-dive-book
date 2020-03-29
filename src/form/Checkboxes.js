import React from 'react'
import styled from 'styled-components'

const Checkbox = ({ name, children, id, register, image }) => (
  <CheckboxWrapper>
    <CheckboxLabel>
      <CheckboxInput type="checkbox" name={name} id={id} ref={register} />
      <img src={image} alt={image.name} />
      <CheckboxMark>
        <Text>{children}</Text>
      </CheckboxMark>
    </CheckboxLabel>
  </CheckboxWrapper>
)

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
`

const CheckboxMark = styled.span`
  display: inline-block;
  position: relative;
  border: none;
  width: 40px;
  height: 40px;
  left: 0;
  border-radius: 15px;
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
    border-radius: 10px;
    background-color: #001a83;
    box-shadow: inset 3px 3px 4px #001464, inset -3px -3px 4px #0020a2;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: relative;
    transition: all 110ms;
  }
`

const CheckboxInput = styled.input`
  position: relative;
  visibility: hidden;
  display: none;
  &:checked + ${CheckboxMark} {
    &::after {
      width: 36px;
      height: 36px;
      opacity: 1;
      left: 10%;
      top: -50%;
    }
  }
`

const CheckboxLabel = styled.label`
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

  img {
    width: 20px;
    height: 20px;
  }
`

const Text = styled.span`
  margin-left: 2px;
`

export default Checkbox
