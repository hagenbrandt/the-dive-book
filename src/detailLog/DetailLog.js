import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { blue } from '../styles/utils/colors'
import { useParams } from 'react-router-dom'
import BackgroundLog from '../backgroundLog/BackgroundLog'
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
    <BackgroundLog>
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
            <h3>{`${dive.depth}`}</h3>
            <h3>Depth</h3>
          </div>
          <div>
            <img src={watch} alt="watch" />
            <h3>
              {countDuration(`${dive.entryDateTime}`, `${dive.exitDateTime}`)}
            </h3>
            <h3>Duration</h3>
          </div>
          <div>
            <img src={goggles} alt="goggles" />
            <h3>{`${dive.visability}`}</h3>
            <h3 className='category'>Visability</h3>
          </div>
        </section>
        <section className="log__detail__description">
          <h3 className="log__detail__description__text">
            {`${dive.description}`}
          </h3>
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
    </BackgroundLog>
  ) : (
    'no dives'
  )
}

const LogBackground = styled.article`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: ${blue['twilightBlueLight']};
  padding-bottom: 54px;

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

    .log__detail__header__three {
      text-align: center;
      margin: 20px 0;
    }

    .log__detail__hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(
        to right,
        ${blue['stratosGradientOne']},
        ${blue['stratosGradientTwo']},
        ${blue['stratosGradientOne']}
      );
    }
  }

  .log__detail__icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;

    > div {
      display: grid;
      justify-items: center;
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

    .category {
      grid-column: span 2;
    }
  }

  .log__detail__description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;

    > h3 {
      text-align: justify;
      line-height: 1.5;
      margin: 0 0 20px;
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
        background-color: ${blue['stratosGradientFull']};
        color: ${blue['twilightBlue']};
        border-radius: 20px;
        padding: 8px;
        margin-right: 12px;
      }
    }
  }
`
export default DetailLog
