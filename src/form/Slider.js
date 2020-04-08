import React from 'react'
import styled from 'styled-components'

export default function Slider({
  rangeState,
  setRangeState,
  type,
  placeholder,
  name,
  min,
  max,
  step,
  value,
  unit,
  register,
}) {
  const handleRangeChange = (e) => {
    setRangeState(e.target.value)
  }

  return (
    <>
      <P>
        {rangeState} {unit}
      </P>
      <InputRange
        type={type}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleRangeChange}
        ref={register}
      />
    </>
  )
}

const InputRange = styled.input`
  margin-bottom: 2px;
  background: #001a83;
  width: 80%;
  -webkit-appearance: none;

  ::-webkit-slider-runnable-track {
    height: 8px;
    background: #001a83;
    box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
    border: none;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #001a83;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #001a83;
    box-shadow: inset -3px -3px 4px #001464, inset 3px 3px 4px #0020a2;
    margin-top: -6px;
  }
`

const P = styled.p`
  color: rgb(236, 252, 255, 1);
  margin-bottom: 20px;
`
