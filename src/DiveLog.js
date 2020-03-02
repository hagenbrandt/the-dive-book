import React from 'react'
import logCard from './img/card.svg'
import styled from 'styled-components'
import img from './img/app_pg_one_bg.svg'
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
      <h1 className="dive__log__header">Thailand - Kho Tao - Diving Spot</h1>
      <div className="dive__log__user">
        <div className="dive__log__user">
          <img className="dive__log__portrait" src={portrait} alt="" />
        </div>
        <div className="dive__log__name">
          <h3 className="dive__log__name__header">Hagen Brandt</h3>
        </div>
      </div>
      <div className="dive__log__icon">
        <img src={bubble} alt="bubble" />
        <img src={heart} alt="heart" />
        <img src={mark} alt="mark" />
        <img src={connect} alt="connect" />
      </div>
    </DiveLog>
  )
}

const DiveLog = styled.div`
  background-color: #ecfcff;
  width: 287px;
  height: 188px;
  margin-top: 60px;
  border-radius: 12px;
  box-shadow: 3px 5px 7px #000d41;

  .dive__log__img {
    /* display: flex; */
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
    font-size: 8px;
  }

  .dive__log__icon {
    display: flex;
    height: 6px;
    width: auto;
    gap: 16px;
    margin: 12px 16px;
  }
`
