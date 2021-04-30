import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getDives } from '../data/fetch/services'
import countDuration from '../helper/countDuration/countDuration'
import exampleImg from '../assets/img/diving_example.jpg'
import goggles from '../assets/img/icons/goggles.svg'
import watch from '../assets/img/icons/watch.svg'
import depth from '../assets/img/icons/depth.svg'

const DetailLog = () => {
  let { id } = useParams()
  const [dives, setDives] = useState([])

  useEffect(() => {
    getDives(id).then((res) => {
      const filteredDive = res.filter((dive) => dive.id === id)
      setDives(filteredDive)
    })
  }, [id])

  let dive = dives ? dives[0] : ''

  return !!dives && !!dive && !!dive.img ? (
    <LogBackground className="log__detail">
      <header className="log__detail__container">
        <div
          className="log__detail__header"
          style={{
            backgroundImage: !!dive.img
              ? `url(${dive.img})`
              : `url(${exampleImg})`,
          }}
        />
      </header>
      <section className="log__detail__header__text">
        <h2 className="log__detail__header__three">{`${dive.divesite}`}</h2>
        <hr className="log__detail__hr" />
      </section>
      <section className="log__detail__icons">
        <div>
          <img src={depth} alt="depth" />
          <p>{`${dive.depth}`}</p>
          <h4>Depth</h4>
        </div>
        <div>
          <img src={watch} alt="watch" />
          <p>
            {countDuration(`${dive.entryDateTime}`, `${dive.exitDateTime}`)}
          </p>
          <h4>Duration</h4>
        </div>
        <div>
          <img src={goggles} alt="goggles" />
          <p>{`${dive.visability}`}</p>
          <h4>Visability</h4>
        </div>
      </section>
      <section className="log__detail__description">
        <p className="log__detail__description__text">
          {`${dive.description}`}
        </p>
        <ul className="log__detail__tags">
          {!!dive.watertype ? <li>{`${dive.watertype}`}</li> : ''}
          {!!dive.Fun ? <li>fun</li> : ''}
          {!!dive.Drift ? <li>drift</li> : ''}
          {!!dive.Night ? <li>night</li> : ''}
          {!!dive.Deep ? <li>deep</li> : ''}
          {!!dive.Cave ? <li>cave</li> : ''}
          {!!dive.Wreck ? <li>wreck</li> : ''}
          {!!dive.Rescue ? <li>rescue</li> : ''}
          {!!dive.Ice ? <li>ice</li> : ''}
        </ul>
      </section>
      <section className="log__detail__description">
        {!!dive.camPic ? (
          <img src={`${dive.camPic}`} alt="" className="stamp" />
        ) : (
          ''
        )}
      </section>
    </LogBackground>
  ) : (
    'no dives'
  )
}

const LogBackground = styled.article`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow: scroll;
  margin: 0 auto;
  padding-bottom: 50px;

  .log__detail__container {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .log__detail__header {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 460px;
    padding-top: 12%;
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

    > p {
      text-align: justify;
      line-height: 1.5;
    }

    .stamp {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
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
