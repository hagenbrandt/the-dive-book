import React from 'react'
import styled from 'styled-components'

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
  color: rgba(62, 100, 255, 0.3);
  /* font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block; */
`

export default FileInput
