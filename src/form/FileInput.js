import React from 'react'
import styled from 'styled-components'
import { blue } from '../styles/utils/colors'

const FileInput = ({ name, onChange, handleUpload, text }) => (
  <>
    <Label htmlFor={name}>
      <Input
        type="file"
        name={name}
        id={name}
        className="inputfile"
        onChange={onChange}
        onSubmit={handleUpload}
      />
      <span>{text}</span>
    </Label>
  </>
)

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const Label = styled.label`
  color: ${blue['dodgerBlueLight']};
`

export default FileInput
