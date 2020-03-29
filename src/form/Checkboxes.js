import React from 'react'
import styled from 'styled-components'

// const Checkbox = ({ name, children, id, register, image }) => (
//   <CheckboxWrapper>
//     <CheckboxLabel>
//       <CheckboxInput type="checkbox" name={name} id={id} ref={register} />
//       <img src={image} alt={image.name} />
//       <CheckboxMark>
//         <Text>{children}</Text>
//       </CheckboxMark>
//     </CheckboxLabel>
//   </CheckboxWrapper>
// )

// const CheckboxWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   font-size: 12px;
// `

// const CheckboxMark = styled.span`
//   display: inline-block;
//   position: relative;
//   border: none;
//   width: 40px;
//   height: 40px;
//   left: 0;
//   border-radius: 15px;
//   /* margin-right: 4px;
//   margin-left: 4px; */
//   /* margin-right: 5px; */
//   background: linear-gradient(70deg, #001776, #001c8c);
//   box-shadow: 3px 3px 4px #001464, -3px -3px 4px #0020a2;
//   /* vertical-align: middle; */
//   &::after {
//     content: '';
//     display: block;
//     border: none;
//     width: 0;
//     height: 0;
//     border-radius: 10px;
//     background-color: #001a83;
//     box-shadow: inset 3px 3px 4px #001464, inset -3px -3px 4px #0020a2;
//     opacity: 0;
//     left: 50%;
//     top: 50%;
//     position: relative;
//     transition: all 110ms;
//   }
// `

// const CheckboxInput = styled.input`
//   position: relative;
//   visibility: hidden;
//   display: none;
//   &:checked + ${CheckboxMark} {
//     &::after {
//       width: 36px;
//       height: 36px;
//       opacity: 1;
//       left: 10%;
//       top: -50%;
//     }
//   }
// `

// const CheckboxLabel = styled.label`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   cursor: pointer;
//   /* padding: 5px 10px 5px 0; */
//   position: relative;
//   ${props =>
//     props.disabled &&
//     `
//         cursor: not-allowed;
//         opacity: 0.4;
//     `}

//   img {
//     width: 20px;
//     height: 20px;
//   }
// `

// const Text = styled.span`
//   margin-left: 2px;
// `

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
  /* position: relative; */
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
    /* border: 1px solid #41b883; */
    background: #000d41;
    box-shadow: inset 3px 3px 4px #000a31, inset -3px -3px 4px #001051;
  }

  &:checked + ${Text}::before {
    content: '\2713';
    display: block;
    text-align: center;
    color: #41b883;
    /* position: relative; */
    left: 0.7rem;
    top: 0.2rem;
  }

  &:active {
    /* border: 2px solid #34495e; */
  }
`

export default Checkbox
