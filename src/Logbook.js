import React, { useState } from 'react'
import styled from 'styled-components'
import { postDives, postLogs } from './services'

const LogBook = () => {
  const [dives, setDives] = useState({})
  console.log('dives.date', dives.date)
  console.log('!!dives.date', !!dives.date)
  return (
    <LogBookForm onSubmit={handleSubmit}>
      <section className="form__dates">
        <h4>Date</h4>
        <input
          type="date"
          className="form__input"
          name="date"
          value={!!dives.date && dives.date}
          onChange={handleChange}
        />
        <h4>Dive No.</h4>
        <input
          type="number"
          className="form__input"
          name="diveNumber"
          value={!!dives.diveNumber && dives.diveNumber}
          onChange={handleChange}
        />
      </section>
      <section className="form__position">
        <input
          type="text"
          className="form__input"
          placeholder="Country"
          name="country"
          value={!!dives.country && dives.country}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="City"
          name="city"
          value={!!dives.city && dives.city}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Point"
          name="point"
          value={!!dives.point && dives.point}
          onChange={handleChange}
        />
      </section>
      <section className="form__values__entry">
        <h4>Entry</h4>
        <p>Time</p>
        <input
          type="time"
          className="form__input"
          name="entryTime"
          value={!!dives.entryTime && dives.entryTime}
          onChange={handleChange}
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="entryAir"
          value={!!dives.entryAir && dives.entryAir}
          onChange={handleChange}
        />
      </section>
      <section className="form__values__exit">
        <h4>Exit</h4>
        <p>Time</p>
        <input
          type="time"
          className="form__input"
          name="exitTime"
          value={!!dives.exitTime && dives.exitTime}
          onChange={handleChange}
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="exitAir"
          value={!!dives.exitAir && dives.exitAir}
          onChange={handleChange}
        />
      </section>
      <section className="form__dive">
        <h4>Water type</h4>
        <select
          name="water-type"
          id="wt"
          value={!!dives.waterType && dives.waterType}
          onChange={handleChange}
        >
          <option value="default" name="default">
            --choose water type--
          </option>
          <option value="salt-water" name="saltWater">
            salt water
          </option>
          {/* <option value="salt-water" name="saltWater" value={!!dives.saltWater && (dives.saltWater===true):(dives.saltWater===false)} >salt water</option> */}
          <option value="fresh-water" name="saltWater">
            fresh water
          </option>
          <option value="brackish-water" name="saltWater">
            brackish water
          </option>
        </select>
        <h4>Type of Dive</h4>
        <div className="form__dive__checkboxes">
          <div className="checkbox" name="fun">
            <p>fun</p>
            <input
              type="checkbox"
              className="form__input"
              name="fun"
              id="fun"
              value={(dives.fun = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>drift</p>
            <input
              type="checkbox"
              className="form__input"
              name="drift"
              id="drift"
              value={(dives.drift = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>night</p>
            <input
              type="checkbox"
              className="form__input"
              name="night"
              id="night"
              value={(dives.night = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>deep</p>
            <input
              type="checkbox"
              className="form__input"
              name="deep"
              id="deep"
              value={(dives.deep = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>cave</p>
            <input
              type="checkbox"
              className="form__input"
              name="cave"
              id="cave"
              value={(dives.cave = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>wreck</p>
            <input
              type="checkbox"
              className="form__input"
              name="wreck"
              id="wreck"
              value={(dives.wreck = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>rescue</p>
            <input
              type="checkbox"
              className="form__input"
              name="rescue"
              id="rescue"
              value={(dives.rescue = true)}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>ice</p>
            <input
              type="checkbox"
              className="form__input"
              name="ice"
              id="ice"
              value={(dives.ice = true)}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
      <section className="form__text">
        <textarea
          id=""
          cols="30"
          rows="10"
          name="description"
          value={!!dives.description ? dives.description : ''}
          onChange={handleChange}
        ></textarea>
      </section>
      <button type="submit">Submit</button>
      {/* <button onClick={() => setDives()} */}
    </LogBookForm>
  )
  function handleSubmit(event) {
    event.preventDefault()
    console.log('form submitted:')
    console.log('event.target:', event.target)
    console.log('event.target.value:', event.target.value)
    postDives(dives)
    postLogs(dives)
  }
  function handleChange(event) {
    console.log('change on event.target:', event.target)
    setDives({ ...dives, [event.target.name]: event.target.value })
    console.log('dive:', dives)
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
