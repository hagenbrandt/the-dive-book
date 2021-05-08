import React from 'react'
import styled from 'styled-components'

const SignOut = ({clickFunction, content}) => {
  return (
    <SignOutSign onClick={clickFunction}>
      {content}
    </SignOutSign>
  )
}

const SignOutSign = styled.span`
  position: absolute;
  top: 20px;
  right: 24px;
  color: white;
  
  &:hover {
    cursor: pointer;
  }
`
export default SignOut