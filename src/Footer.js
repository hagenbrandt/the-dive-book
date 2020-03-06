import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import home from './img/icons/home.svg'
import lens from './img/icons/lupe.svg'
import book from './img/icons/book.svg'
import world from './img/icons/world.svg'

export default function Footer() {
  return (
    <FooterStyle>
      <Link to="/" className="footer__link__icon">
        <img src={home} alt="home" />
      </Link>
      <a className="footer__link__icon" href="#">
        <img src={lens} alt="lens" />
      </a>
      <a className="footer__link__icon" href="#">
        <img src={book} alt="book" />
      </a>
      <a className="footer__link__icon" href="#">
        <img src={world} alt="world" />
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
