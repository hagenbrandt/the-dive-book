import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import exampleImg from './img/diving_example.jpg'
import portrait from './img/portrait.jpg'
import bubble from './img/icons/bubble.svg'
import heart from './img/icons/heart.svg'
import mark from './img/icons/mark.svg'
import connect from './img/icons/connect.svg'

export default function DiveLogs() {
  return (
    <DiveLog className="dive__log">
      <div
        style={{ backgroundImage: `url(${exampleImg})` }}
        className="dive__log__img"
      />
      <Link to="/DetailLog" className="dive__log__header__link">
        <h1 className="dive__log__header">Thailand - Kho Tao - Diving Spot</h1>
      </Link>
      <a className="dive__log__user__link" href="#">
        <div className="dive__log__user">
          <div className="dive__log__user">
            <img className="dive__log__portrait" src={portrait} alt="" />
          </div>
          <div className="dive__log__name">
            <h3 className="dive__log__name__header">Hagen Brandt</h3>
          </div>
        </div>
      </a>
      <div className="dive__log__icon">
        <a href="#">
          <img src={bubble} alt="bubble" />
        </a>

        <p className="dive__log__icon__counter">17</p>
        <a className="dive__log__icon__link" href="#">
          <img src={heart} alt="heart" />
        </a>
        <p className="dive__log__icon__counter">17</p>
        <a className="dive__log__icon__link" href="#">
          <img src={mark} alt="mark" />
        </a>
        <a className="dive__log__icon__link" href="#">
          <img src={connect} alt="connect" />
        </a>
      </div>
    </DiveLog>
  )
}

const DiveLog = styled.div`
  background-color: #ecfcff;
  color: #000d41;
  width: 287px;
  height: 188px;
  margin-top: 60px;
  border-radius: 12px;
  box-shadow: 3px 5px 7px #000d41;

  .dive__log__img {
    height: 40%;
    border-radius: 12px 12px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: top;
  }

  .dive__log__header {
    position: relative;
    margin-top: 12px;
    font-size: 14px;
    color: #000d41;
    text-align: left;
    margin-left: 8px;
  }

  .dive__log__user {
    margin: 10px 8px;
  }

  .dive__log__portrait {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    object-fit: cover;
  }

  .dive__log__user {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .dive__log__name__header {
    font-size: 10px;
    color: #000d41;
  }

  .dive__log__icon {
    display: flex;
    height: 6px;
    width: auto;
    gap: 16px;
    margin: 12px 16px;
    align-items: center;
    justify-content: flex-start;

    img:last-child {
      margin-left: 14px;
    }
  }

  .dive__log__icon__counter {
    font-size: 6px;
    color: #3e64ff;
  }
`
