import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import home from './img/icons/home.svg'
import diver from './img/icons/Diver.svg'
import lens from './img/icons/lupe.svg'
import book from './img/icons/book.svg'
import logbook from './img/icons/LogBook.svg'
import world from './img/icons/world.svg'
import profile from './img/icons/Account.svg'

export default function Footer() {
  return (
    <FooterStyle>
      <Link to="/" className="footer__link__icon">
        <img src={diver} alt="home" />
      </Link>
      <a className="footer__link__icon" href="/">
        <img src={lens} alt="lens" />
      </a>
      <Link to="/LogBook" className="footer__link__icon">
        <img src={logbook} alt="book" />
      </Link>
      <a className="footer__link__icon" href="/">
        <img src={profile} alt="world" />
      </a>
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
