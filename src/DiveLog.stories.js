import React from 'react'
import { action } from '@storybook/addon-actions'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import exampleImg from './img/diving_example.jpg'
import portrait from './img/portrait.jpg'
import bubble from './img/icons/bubble.svg'
import heart from './img/icons/heart.svg'
import mark from './img/icons/mark.svg'
import connect from './img/icons/connect.svg'
import DiveLog from './DiveLog'

export default {
  title: 'DiveLog',
  component: DiveLog,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export function DiveLogs({
  country = 'Thailand',
  city = 'Kho Tao',
  point = 'Twin Rocks',
  id = 42,
}) {
  return (
    <Router>
      <DiveLog className="dive__log">
        <div
          style={{ backgroundImage: `url(${exampleImg})` }}
          className="dive__log__img"
        />
        <Link to={'/DetailLog/' + id} className="dive__log__header__link">
          <h1 className="dive__log__header">
            {country} - {city} - {point}
          </h1>
        </Link>
        <a className="dive__log__user__link" href="/">
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
          <a href="/">
            <img src={bubble} alt="bubble" />
          </a>

          <p className="dive__log__icon__counter">17</p>
          <a className="dive__log__icon__link" href="">
            <img src={heart} alt="heart" />
          </a>
          <p className="dive__log__icon__counter">17</p>
          <a className="dive__log__icon__link" href="">
            <img src={mark} alt="mark" />
          </a>
          <a className="dive__log__icon__link" href="">
            <img src={connect} alt="connect" />
          </a>
        </div>
      </DiveLog>
    </Router>
  )
}
