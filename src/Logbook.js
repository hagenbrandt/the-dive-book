import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { storage } from './firebase'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { postLogs } from './services'
import { CameraSite, ImageContext } from './Camera'

export default function LogBook() {
  const [image, setImage] = useState(null)
  const [cardImage, setCardImage] = useState()
  const [url, setUrl] = useState()
  const { register, handleSubmit } = useForm({
    defaultValues: { id: uuid(), img: url },
  })

  useEffect(() => {
    console.log('CardImage :', cardImage)
  }, [cardImage])

  const handleUpload = e => {
    e.preventDefault()
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
  // const handleCamUpload = () => {
  //   debugger
  //   var storageRef = storage.ref()
  //   storageRef.put(cardImage).then(function(snapshot) {
  //     console.log('Uploaded a blob or file!')
  //   })
  //   const uploadTask = storage.ref(`campics`).put(cardImage)
  //   uploadTask.on(
  //     'state_changed',
  //     snapshot => {},
  //     error => {
  //       console.error(error)
  //     },
  //     () => {
  //       storage
  //         .ref('campics')
  //         .child(cardImage)
  //         .getDownloadURL()
  //         .then(url => {
  //           setUrl(url)
  //         })
  //     }
  //   )
  // }

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
      console.log(e.target)
    }
  }
  // console.log('CardImage: ', cardImage)
  console.log('image: ', image)

  function onSubmit(data, url) {
    // postLogs(data, { img: url })
  }

  const checkboxes = []

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <section className="form__dates container">
        <label htmlFor="date">
          <h4>Date</h4>
        </label>
        <input className="form__dates__id" name="id" ref={register} />
        <input
          className="form__dates__id"
          name="img"
          value={url}
          ref={register}
        />
        <input
          type="date"
          className="form__input"
          name="date"
          value=""
          ref={register}
        />
        <label htmlFor="diveNumber">
          <h4>Dive No.</h4>
        </label>
        <input
          type="number"
          className="form__input"
          name="diveNumber"
          ref={register}
        />
      </section>
      <section className="form__position container">
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
        <input
          type="text"
          className="form__input"
          placeholder="Dive Center"
          name="divecenter"
          ref={register}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Buddy"
          name="buddy"
          ref={register}
        />
      </section>
      <section className="form__values__conditions container">
        <label htmlFor="suit">
          <h4>Suit Type</h4>
        </label>
        <select name="suitType" id="wt" ref={register}>
          <option value="default" name="default">
            --choose suit type--
          </option>
          <option value="threeMmShort" name="threeMmShort" ref={register}>
            3mm Short
          </option>
          <option value="fiveMmShort" name="fiveMmShort" ref={register}>
            5mm Short
          </option>
          <option value="threeMmLong" name="threeMmLong" ref={register}>
            3mm Long
          </option>
          <option value="fiveMmLong" name="fiveMmLong" ref={register}>
            5mm Long
          </option>
          <option value="sevenMmLong" name="sevenMmLong" ref={register}>
            7mm Long
          </option>
          <option value="dry" name="dry" ref={register}>
            Dry
          </option>
        </select>
        <input
          type="number"
          className="form__input"
          placeholder="Weight in kg"
          name="weight"
          ref={register}
        />
        <Radiogroup>
          <input type="radio" name="sunny" id="sunny" />
          <span>Sunny</span>
          <input type="radio" name="cloudy" id="cloudy" />
          <span>Cloudy</span>
          <input type="radio" name="rainy" id="rainy" />
          <span>Rainy</span>
        </Radiogroup>
      </section>
      <section className="form__values__entry container">
        <label htmlFor="entryTime">
          <h4>Entry</h4>
          <p>Time</p>
        </label>
        <input
          type="time"
          className="form__input"
          name="entryTime"
          ref={register}
        />
        <label htmlFor="entryAir">
          <p>Air</p>
        </label>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="entryAir"
          ref={register}
        />
      </section>
      <section className="form__values__exit container">
        <label htmlFor="exitTimw">
          <h4>Exit</h4>
          <p>Time</p>
        </label>
        <input
          type="time"
          className="form__input"
          name="exitTime"
          ref={register}
        />
        <label htmlFor="exitAir">
          <p>Air</p>
        </label>
        <input
          type="number"
          className="form__input"
          placeholder="bar"
          name="exitAir"
          ref={register}
        />
      </section>
      <section className="form__dive conditions container">
        <label htmlFor="waterType">
          <h4>Water type</h4>
        </label>
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
      </section>
      <section className="form__dive typeOfDive container">
        <label htmlFor="typeOfDive">
          <h4>Type of Dive</h4>
        </label>
        <div className="form__dive__checkboxes">
          {/* checkboxes.map => checkbox {
            <div className="checkbox">
            <p>{checkbox}</p>
            <input type="checkbox" className="form__input" name={checkbox} ref={{register}} id={checkbox} />
          } */}
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
        </div>
      </section>
      <section className="form__dive conditions container">
        <input
          type="file"
          name="image"
          onChange={handleChange}
          onSubmit={handleUpload}
        />
        <button onClick={handleUpload}>Upload</button>
      </section>
      <section className="form__text container">
        <Description
          id=""
          style={{ resize: 'none' }}
          cols="30"
          rows="10"
          name="description"
          placeholder="Describe your dive..."
          ref={register}
        ></Description>
      </section>
      <section className="container">
        <CameraSite cardImage={cardImage} setCardImage={setCardImage} />
      </section>
      <button type="submit">Submit</button>
    </LogBookForm>
  )
}

const LogBookForm = styled.form`
  display: grid;
  justify-items: center;
  width: 100vw;
  margin: 0;
  /* position: relative; */
  background-color: #001a83;
  color: #3e64ff;
  /* padding: 12px; */
  padding-bottom: 80px;
  gap: 12px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #001a83;
    box-shadow: inset 13px 13px 50px #00166f, inset -13px -13px 50px #001e97;
    border-radius: 50px;
    padding: 40px;
    margin: 40px 10px 10px;
    width: 80%;
  }

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
    background: #001a83;
    /* border: 1px solid transparent; */
    border: none;
    height: 28px;
    color: #ecfcff;
    box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
    /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff; */
    ::placeholder {
      color: rgba(62, 100, 255, 0.3);
    }
    input {
      color: #ecfcff;
      /* color: #661a83; */
    }
  }
  input[type='date'],
  focus {
    color: rgba(62, 100, 255, 0.3);
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  input[type='time'],
  focus {
    color: rgba(62, 100, 255, 0.3);
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  .form__position {
    > input {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
  select {
    background-color: #001a83;
    /* background-color: #3e64ff; */
    color: rgba(62, 100, 255, 0.3);
    border-radius: 4px;
    border: none;
    /* border: 1px solid transparent; */
    height: 28px;
    box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.1), 6px 6px 8px rgba(0, 0, 0, 0.1);
  }
  input[type='checkbox'] {
    box-shadow: none;
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

const Description = styled.textarea`
  background-color: #001a83;
  color: #ecfcff;
  border: none;
  border-radius: 40px;
  padding: 12px;
  /* border-radius: 4px; */
  /* border: 1px solid transparent; */
  /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
    0 1px 0 #fff; */
  width: 95%;
  ::placeholder {
    color: rgba(62, 100, 255, 0.3);
  }
`
const Radiogroup = styled.div`
  margin: 8px 0;
`
