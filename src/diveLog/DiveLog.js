import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from '../styles/utils/colors'
import exampleImg from '../assets/img/diving_example.jpg'
import portrait from '../assets/img/portrait.jpg'

export default function DiveLogs({ country, city, divesite, point, id, img }) {
  return (
    <DiveLog className="dive__log">
      <div
        style={{
          backgroundImage: !!img ? `url(${img})` : `url(${exampleImg})`,
        }}
        className="dive__log__img"
      />
      <Link to={'/DetailLog/' + id} className="dive__log__header__link">
        <h3 className="dive__log__header">
          {country} - {city} - {divesite}
        </h3>
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
    </DiveLog>
  )
}

const DiveLog = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: 50% auto auto auto;
  color: ${blue['stratosDark']};
  background-color: ${blue['twilightBlue']};
  width: 287px;
  height: 220px;
  margin-top: 50px;
  border-radius: 12px;
  box-shadow: 3px 5px 7px ${blue['stratosDark']};

  .dive__log__img {
    height: 120px;
    width: auto;
    border-radius: 12px 12px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
  }

  .dive__log__header {
    position: relative;
    padding-left: 8px;
    margin: 12px 8px;
    color: ${blue['stratosDark']};
    text-align: left;
    margin-left: 8px;
  }

  .dive__log__user {
    margin: 0px 0px;
    padding-left: 8px;
    padding-right: 8px;
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
    color: ${blue['stratosDark']};
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
    color: ${blue['dodgerBlue']};
  }
`
