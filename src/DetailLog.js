import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getDives } from './services'
import exampleImg from './img/diving_example.jpg'
import goggles from './img/icons/goggles.svg'
import watch from './img/icons/watch.svg'
import depth from './img/icons/depth.svg'

const DetailLog = () => {
  let { id } = useParams()
  const [dives, setDives] = useState([])

  useEffect(() => {
    getDives(id).then(res => {
      const filteredDive = res.filter(dive => dive.id === id)
      setDives(filteredDive)
    })
  }, [id])

  let dive = dives ? dives[0] : ''

  function countDuration(timeDateOne, timeDateTwo) {
    const entryTime = moment(timeDateOne, 'LT')
    const exitTime = moment(timeDateTwo, 'LT')
    const timeDiff = exitTime.diff(entryTime) / 1000 / 60
    return <p>{timeDiff}</p>
  }

  return !!dives && !!dive ? (
    <LogBackground className="log__detail">
      <header
        className="log__detail__header"
        style={{ backgroundImage: `url(${exampleImg})` }}
      ></header>
      <section className="log__detail__header__text">
        <h2 className="log__detail__header__three">{`${dive.point}`}</h2>
        <hr className="log__detail__hr" />
      </section>
      <section className="log__detail__icons">
        <div>
          <img src={depth} alt="depth" />
          <p>30</p>
          <h4>Depth</h4>
        </div>
        <div>
          <img src={watch} alt="watch" />
          {countDuration(`${dive.entryTime}`, `${dive.exitTime}`)}
          <h4>Duration</h4>
        </div>
        <div>
          <img src={goggles} alt="goggles" />
          <p>30</p>
          <h4>Visability</h4>
        </div>
      </section>
      <section className="log__detail__description">
        <p className="log__detail__description__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          possimus aut delectus, laboriosam fugit eius. Qui aperiam voluptates
          rerum itaque minima sapiente magnam! Doloremque eveniet temporibus, ex
          quo error sint? Earum beatae soluta velit sed minus minima voluptate
          optio debitis, modi culpa reiciendis impedit ab voluptatum quaerat
          incidunt iure voluptatem reprehenderit doloribus cum ipsa enim
          obcaecati est? Eum, saepe tenetur. Vero quis commodi nam totam
          consectetur in a corrupti. At eveniet tenetur cupiditate voluptates
          totam cum nihil sed nemo sequi earum laborum accusamus et, blanditiis
          necessitatibus ipsam esse id doloribus?
        </p>
        <ul className="log__detail__tags">
          {!!dive.watertype ? <li>{`${dive.watertype}`}</li> : ''}
          {!!dive.fun ? <li>fun</li> : ''}
          {!!dive.drift ? <li>drift</li> : ''}
          {!!dive.night ? <li>night</li> : ''}
          {!!dive.deep ? <li>deep</li> : ''}
          {!!dive.cave ? <li>cave</li> : ''}
          {!!dive.wreck ? <li>wreck</li> : ''}
          {!!dive.rescue ? <li>rescue</li> : ''}
          {!!dive.ice ? <li>ice</li> : ''}
        </ul>
      </section>
    </LogBackground>
  ) : (
    'no dives'
  )
}

const LogBackground = styled.article`
  display: flex;
  width: 100vw;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 40px;

  .log__detail__header {
    background-size: cover;
    background-position: center;
    height: 200px;
    border-radius: 12px 12px 0 0;
  }

  .log__detail__header__text {
    height: auto;
    background-color: rgba(236, 252, 255, 0.8);

    .log__detail__header__three {
      text-align: center;
    }

    .log__detail__hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(
        to right,
        rgba(0, 13, 65, 0),
        rgba(0, 13, 65, 0.75),
        rgba(0, 13, 65, 0)
      );
    }
  }

  .log__detail__icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
    background-color: rgba(236, 252, 255, 0.8);

    > div {
      display: grid;
      justify-items: start;
      align-items: center;
      padding: 4px;
      grid-template-columns: 30px auto;
      grid-template-rows: 30px 44px;
      grid-template-areas:
        'img p'
        'h4 h4';

      > img {
        grid-area: img;
        height: 20px;
        width: 20px;
      }
      p {
        grid-area: p;
      }

      h4 {
        grid-area: h4;
        align-self: end;
        margin-top: 6px;
      }
    }
  }

  .log__detail__description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    background-color: rgba(236, 252, 255, 0.8);
    border-radius: 0 0 12px 12px;

    > p {
      text-align: justify;
      line-height: 1.5;
    }

    .log__detail__tags {
      display: flex;
      justify-content: flex-start;
      list-style-type: none;
      padding-left: 0;

      li {
        background-color: rgb(0, 13, 65);
        color: rgb(236, 252, 255);
        border-radius: 8px;
        padding: 4px;
        margin-right: 12px;
      }
    }
  }
`
export default DetailLog
