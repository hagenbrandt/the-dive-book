import React from 'react'
import styled from 'styled-components'
import exampleImg from './img/diving_example.jpg'
import goggles from './img/icons/goggles.svg'
import watch from './img/icons/watch.svg'
import depth from './img/icons/depth.svg'

export default function DetailLog() {
  return (
    <LogBackground className="log__detail">
      <header
        className="log__detail__header"
        style={{ backgroundImage: `url(${exampleImg})` }}
      ></header>
      <section className="log__detail__header__text">
        <h2 className="log__detail__header__three">Diving Spot</h2>
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
          <p>30</p>
          <h4>Duration</h4>
        </div>
        <div>
          <img src={goggles} alt="goggles" />
          <p>30</p>
          <h4>Visability</h4>
        </div>
      </section>
      {/* <section className="log__detail__icons__text"></section> */}
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
          necessitatibus ipsam esse id doloribus?{' '}
        </p>
        <ul className="log__detail__tags">
          <li>saltwater</li>
          <li>fun dive</li>
        </ul>
      </section>
    </LogBackground>
  )
}

const LogBackground = styled.article`
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 40px;

  .log__detail__header {
    background-size: cover;
    background-position: center;
    height: 200px;
    /* width: auto; */
    border-radius: 12px 12px 0 0;
  }

  .log__detail__header__text {
    height: auto;
    /* padding: 12px; */
    background-color: rgba(236, 252, 255, 0.8);
    /* align-items: center; */

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
