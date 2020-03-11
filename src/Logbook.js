import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import uid from 'react-uid'
import styled from 'styled-components'
import { postDives, postLogs, getLogs } from './services'

export default function LogBook() {
  const [dives, setDives] = useState([])
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: { id: uuid() },
  })

  // useEffect(() => {
  //   getLogs().then(res => {
  //     // setDives(res.data)
  //     console.log(res)
  //   })
  // }, [dives])

  const onSubmit = data => {
    console.log('selected data: ', data)
    // const values = getValues()
    setDives([...dives, { data }])
    console.log('dives: ', dives)
    postLogs(data)
  }

  // const onSubmit = () => {
  //   console.log(uuid())
  // }
  // console.log('dives.date', dives.date)
  // console.log('!!dives.date', !!dives.date)

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <section className="form__dates">
        <h4>Date</h4>
        <input className="form__dates__id" name="id" ref={register} />
        <input
          type="date"
          className="form__input"
          name="date"
          ref={register}
          // value={!!dives.date && dives.date}
          // onChange={handleChange}
        />
        <h4>Dive No.</h4>
        <input
          type="number"
          className="form__input"
          name="diveNumber"
          ref={register}
          // value={!!dives.diveNumber && dives.diveNumber}
          // onChange={handleChange}
        />
      </section>
      <section className="form__position">
        <input
          type="text"
          className="form__input"
          placeholder="Country"
          name="country"
          ref={register}
          // value={!!dives.country ? dives.country : ''}
          // onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="City"
          name="city"
          ref={register}
          // value={!!dives.city && dives.city}
          // onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Point"
          name="point"
          ref={register}
          // value={!!dives.point && dives.point}
          // onChange={handleChange}
        />
      </section>
      <section className="form__values__entry">
        <h4>Entry</h4>
        <p>Time</p>
        <input
          type="time"
          className="form__input"
          name="entryTime"
          ref={register}
          // value={!!dives.entryTime && dives.entryTime}
          // onChange={handleChange}
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="entryAir"
          ref={register}
          // value={!!dives.entryAir && dives.entryAir}
          // onChange={handleChange}
        />
      </section>
      <section className="form__values__exit">
        <h4>Exit</h4>
        <p>Time</p>
        <input
          type="time"
          className="form__input"
          name="exitTime"
          ref={register}
          // value={!!dives.exitTime && dives.exitTime}
          // onChange={handleChange}
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="exitAir"
          ref={register}
          // value={!!dives.exitAir && dives.exitAir}
          // onChange={handleChange}
        />
      </section>
      <section className="form__dive">
        <h4>Water type</h4>
        <select
          name="water-type"
          id="wt"
          ref={register}
          // value={!!dives.waterType && dives.waterType}
          // onChange={handleChange}
        >
          <option value="default" name="default">
            --choose water type--
          </option>
          <option value="salt-water" name="saltWater" ref={register}>
            salt water
          </option>
          {/* <option value="salt-water" name="saltWater" value={!!dives.saltWater && (dives.saltWater===true):(dives.saltWater===false)} >salt water</option> */}
          <option value="fresh-water" name="saltWater" ref={register}>
            fresh water
          </option>
          <option value="brackish-water" name="saltWater" ref={register}>
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
              ref={register}
              id="fun"
              // value={dives.fun ? dives.fun.checked : false}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>drift</p>
            <input
              type="checkbox"
              className="form__input"
              name="drift"
              ref={register}
              id="drift"
              // value={(dives.drift = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>night</p>
            <input
              type="checkbox"
              className="form__input"
              name="night"
              id="night"
              ref={register}
              // value={(dives.night = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>deep</p>
            <input
              type="checkbox"
              className="form__input"
              name="deep"
              id="deep"
              ref={register}
              // value={(dives.deep = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>cave</p>
            <input
              type="checkbox"
              className="form__input"
              name="cave"
              id="cave"
              ref={register}
              // value={(dives.cave = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>wreck</p>
            <input
              type="checkbox"
              className="form__input"
              name="wreck"
              id="wreck"
              ref={register}
              // value={(dives.wreck = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>rescue</p>
            <input
              type="checkbox"
              className="form__input"
              name="rescue"
              id="rescue"
              ref={register}
              // value={(dives.rescue = true)}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <p>ice</p>
            <input
              type="checkbox"
              className="form__input"
              name="ice"
              id="ice"
              ref={register}
              // value={(dives.ice = true)}
              // onChange={handleChange}
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
          ref={register}
          // value={!!dives.description ? dives.description : ''}
          // onChange={handleChange}
        ></textarea>
      </section>
      <button type="submit">Submit</button>
      {/* <button onClick={() => setDives()} */}
    </LogBookForm>

    // function handleSubmit(event) {
    //   event.preventDefault()
    //   console.log('form submitted:')
    //   console.log('event.target:', event.target)
    //   console.log('event.target.value:', event.target.value)
    //   postLogs(dives)
    // }

    //   function handleChange(event) {
    //     console.log('change on event.target:', event.target.checked)
    //     console.log('checked:', dives.fun)
    //     setDives({
    //       ...dives,
    //       [event.target.name]: event.target.value || event.target.checked,
    //     })
    //     console.log('dive:', dives)
    //   }
    // }
  )
}
const LogBookForm = styled.form`
  display: grid;
  position: relative;
  background-color: #001a83;
  color: #ecfcff;
  padding: 12px;
  gap: 12px;
  margin-bottom: 80px;

  .form__dates__id {
    display: none;
  }

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
// export default LogBook
