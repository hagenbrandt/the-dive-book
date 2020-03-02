import React from 'react'
import styled from 'styled-components'
import home from './img/icons/home.svg'
import lens from './img/icons/lupe.svg'
import book from './img/icons/book.svg'
import world from './img/icons/world.svg'

export default function Footer() {
  return (
    <FooterStyle>
      <img src={home} alt="home" />
      <img src={lens} alt="lens" />
      <img src={book} alt="book" />
      <img src={world} alt="world" />
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  background-color: #000d41;
  height: 54px;
  width: 100vw;
  margin-bottom: 0;
  padding-bottom: -10;
`
