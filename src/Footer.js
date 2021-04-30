import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import diver from './assets/img/icons/Diver.svg'
import logbook from './assets/img/icons/LogBook.svg'

export default function Footer() {
  return (
    <FooterStyle>
      <Link to="/" className="footer__link__icon">
        <img src={diver} alt="home" />
      </Link>
      <Link to="/LogBook" className="footer__link__icon">
        <img src={logbook} alt="book" />
      </Link>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000d41;
  height: 54px;
  width: 100vw;
`
