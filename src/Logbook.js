import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import log from './log'
import { getDives, postDives } from './services'

function LogBook({ onSubmit }) {
  const [dives, setDives] = useState()

  // useEffect(() => {
  //   getDives().then(res => {
  //     setDives(res.data)
  //   })
  // }, [])
  // console.log(dives)

  return (
    // <LogBookForm>
    <LogBookForm onSubmit={handleSubmit}>
      <section className="form__dates">
        <h4>Date</h4>
        <input type="date" className="form__input" value={'date'} />
        <h4>Dive No.</h4>
        <input type="number" name="divenumber" className="form__input" />
      </section>
      <section className="form__position">
        <input type="text" className="form__input" placeholder="Country" />
        <input type="text" className="form__input" placeholder="City" />
        <input type="text" className="form__input" placeholder="Point" />
      </section>
      <section className="form__values__entry">
        <h4>Entry</h4>
        <p>Time</p>
        <input type="time" className="form__input" />
        <p>Air</p>
        <input type="number" className="form__input" placeholder="bar" />
      </section>
      <section className="form__values__exit">
        <h4>Exit</h4>
        <p>Time</p>
        <input type="time" className="form__input" />
        <p>Air</p>
        <input type="number" className="form__input" placeholder="bar" />
      </section>
      <section className="form__dive">
        <h4>Water type</h4>
        <select name="water-type" id="wt">
          <option value="salt-water">salt water</option>
          <option value="fresh-water">fresh water</option>
          <option value="brackish-water">brackish water</option>
        </select>
        <h4>Type of Dive</h4>
        <div className="form__dive__checkboxes">
          <div className="checkbox">
            <p>fun</p>
            <input
              type="checkbox"
              className="form__input"
              name="fun"
              id="fun"
            />
          </div>
          <div className="checkbox">
            <p>drift</p>
            <input
              type="checkbox"
              className="form__input"
              name="drift"
              id="drift"
            />
          </div>
          <div className="checkbox">
            <p>night</p>
            <input
              type="checkbox"
              className="form__input"
              name="night"
              id="night"
            />
          </div>
          <div className="checkbox">
            <p>deep</p>
            <input
              type="checkbox"
              className="form__input"
              name="deep"
              id="deep"
            />
          </div>
          <div className="checkbox">
            <p>cave</p>
            <input
              type="checkbox"
              className="form__input"
              name="cave"
              id="cave"
            />
          </div>
          <div className="checkbox">
            <p>wreck</p>
            <input
              type="checkbox"
              className="form__input"
              name="wreck"
              id="wreck"
            />
          </div>
          <div className="checkbox">
            <p>rescue</p>
            <input
              type="checkbox"
              className="form__input"
              name="rescue"
              id="rescue"
            />
          </div>
          <div className="checkbox">
            <p>ice</p>
            <input
              type="checkbox"
              className="form__input"
              name="ice"
              id="ice"
            />
          </div>
        </div>
      </section>
      <section className="form__text">
        <textarea name="description" id="" cols="30" rows="10"></textarea>
      </section>
      <button type="submit">Submit</button>
      {/* <button onClick={() => setDives()} */}
    </LogBookForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.values)
    setDives(event.target.values)
    const data = new FormData(event.target)
    console.log(data.get)

    // postDives(data).then(() => {
    //   getDives().then(res => {
    //     setDives(res.data)
    //   })
    // })
  }
}

const LogBookForm = styled.form`
  display: grid;
  position: relative;
  background-color: #001a83;
  color: #ecfcff;
  padding: 12px;
  gap: 12px;
  margin-bottom: 80px;

  .form__input {
    border-radius: 4px;
    background-color: #3e64ff;
    border: 1px solid transparent;
    height: 28px;
    color: #ecfcff;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
    /* box-shadow: inset 0px 4px 8px 2px , 0.4); */

    ::placeholder {
      color: #ecfcff;
    }

    input {
      color: #ecfcff;
    }
  }

  .form__position {
    /* margin: 8px; */
    > input {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }

  select {
    background-color: #3e64ff;
    color: #ecfcff;
    border-radius: 4px;
    border: 1px solid transparent;
    height: 28px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
  }

  input[type='checkbox'] {
    box-shadow: none;
  }

  textarea {
    background-color: #3e64ff;
    color: #ecfcff;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
    width: 90vw;
    /* margin-left: 8px;
    margin-right: 8px; */
  }

  button {
    background-color: #000d41;
    color: #ecfcff;
    height: 24px;
    width: 80px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
  }

  .form__dive__checkboxes {
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    flex-wrap: wrap;
  }

  div {
    display: flex;
    align-items: center;
    padding-right: 20px;
    justify-content: space-between;
  }
`
export default LogBook
