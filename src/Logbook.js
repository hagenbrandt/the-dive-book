import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { storage } from './firebase'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { postLogs } from './services'

export default function LogBook() {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState()
  const { register, handleSubmit } = useForm({
    defaultValues: { id: uuid(), img: url },
  })

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          })
      }
    )
  }

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  console.log('image: ', image)

  function onSubmit(data, url) {
    postLogs(data, { img: url })
  }

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <section className="form__dates">
        <h4>Date</h4>
        <input className="form__dates__id" name="id" ref={register} />
        <input
          className="form__dates__id"
          name="img"
          value={url}
          ref={register}
        />
        <input type="date" className="form__input" name="date" ref={register} />
        <h4>Dive No.</h4>
        <input
          type="number"
          className="form__input"
          name="diveNumber"
          ref={register}
        />
      </section>
      <section className="form__position">
        <input
          type="text"
          className="form__input"
          placeholder="Country"
          name="country"
          ref={register}
        />
        <input
          type="text"
          className="form__input"
          placeholder="City"
          name="city"
          ref={register}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Point"
          name="point"
          ref={register}
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
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="entryAir"
          ref={register}
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
        />
        <p>Air</p>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="exitAir"
          ref={register}
        />
      </section>
      <section className="form__dive">
        <h4>Water type</h4>
        <select name="watertype" id="wt" ref={register}>
          <option value="default" name="default">
            --choose water type--
          </option>
          <option value="salt water" name="saltWater" ref={register}>
            salt water
          </option>
          <option value="fresh water" name="saltWater" ref={register}>
            fresh water
          </option>
          <option value="brackish water" name="saltWater" ref={register}>
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
            />
          </div>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            onSubmit={handleUpload}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </section>
      <section className="form__text">
        <textarea
          id=""
          cols="30"
          rows="10"
          name="description"
          ref={register}
        ></textarea>
      </section>
      <button type="submit">Submit</button>
    </LogBookForm>
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

  .error {
    color: #bf1650;
  }

  .error::before {
    display: inline;
    content: '⚠ ';
  }

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
    ::placeholder {
      color: #ecfcff;
    }
    input {
      color: #ecfcff;
    }
  }
  .form__position {
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
