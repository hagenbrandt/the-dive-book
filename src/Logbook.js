import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { storage } from './firebase'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { postLogs } from './services'
import Radio from './form/Radio'
import Checkbox from './form/Checkboxes'
import FileInput from './form/FileInput'
import { CameraSite, ImageContext } from './Camera'
import Fun from './img/icons/checkboxes/Fun.svg'

export default function LogBook() {
  const [image, setImage] = useState(null)
  const [cardImage, setCardImage] = useState()
  const [url, setUrl] = useState()
  const { register, errors, handleSubmit } = useForm({
    defaultValues: { id: uuid(), img: url },
    submitFocusError: true,
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
  const handleUpload2 = cb => {
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
            cb(url)
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

  // function onSubmit(someValue) {
  //   return function(data) {
  //     postLogs(data, { img: someValue })
  //   }
  // }

  function onSubmit(data) {
    handleUpload2(url => {
      postLogs({
        ...data,
        img: url,
      })
    })
  }

  const checkboxes = []

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <section className="form__dates container">
        <label htmlFor="date">
          <h4>Date</h4>
        </label>
        <input className="form__dates__id" name="id" ref={register} />
        {/* <input
          className="form__dates__id"
          name="img"
          value={url}
          ref={register}
        /> */}
        <input
          type="date"
          className="form__input date"
          name="date"
          ref={register({ required: true })}
        />
        <label htmlFor="diveNumber">
          <h4>Dive No.</h4>
        </label>
        <input
          type="number"
          className="form__input"
          placeholder="Dive Number"
          name="diveNumber"
          ref={register({ min: 1, max: 10000 })}
        />
        {errors.diveNumber && errors.diveNumber.type === 'min' && (
          <p className="error">Sorry buddy, but I need a valid number.</p>
        )}
        {errors.diveNumber && errors.diveNumber.type === 'max' && (
          <p className="error">Are you a fish or a human?</p>
        )}
        <h4>Buddy</h4>
        <input
          type="text"
          className="form__input"
          placeholder="Buddy"
          name="buddy"
          ref={register({ maxLength: 30, pattern: /[A-Za-z]/ })}
        />
        {errors.buddy && errors.buddy.type === 'maxLength' && (
          <p className="error">Nice try bot!</p>
        )}
        {errors.buddy && errors.buddy.type === 'pattern' && (
          <p className="error">You sure, this is a human?</p>
        )}
      </section>
      <section className="form__position container">
        <h4>Location</h4>
        <input
          type="text"
          className="form__input"
          placeholder="Country"
          name="country"
          ref={register({ required: true, maxLength: 74, pattern: /[A-Za-z]/ })}
        />
        {errors.country && errors.country.type === 'required' && (
          <p className="error">Please set a country</p>
        )}
        {errors.country && errors.country.type === 'maxLength' && (
          <p className="error">Nice try bot!</p>
        )}
        {errors.country && errors.country.type === 'pattern' && (
          <p className="error">You sure, this is a country?</p>
        )}
        <input
          type="text"
          className="form__input"
          placeholder="City"
          name="city"
          ref={register({ required: true, maxLength: 28, pattern: /[A-Za-z]/ })}
        />
        {errors.city && errors.city.type === 'required' && (
          <p className="error">Please set a city</p>
        )}
        {errors.city && errors.city.type === 'maxLength' && (
          <p className="error">Nice try bot!</p>
        )}
        {errors.city && errors.city.type === 'pattern' && (
          <p className="error">You sure, this is a city?</p>
        )}
        <input
          type="text"
          className="form__input"
          placeholder="Dive Site"
          name="divesite"
          ref={register({ required: true, maxLength: 40, pattern: /[A-Za-z]/ })}
        />
        {errors.divesite && errors.divesite.type === 'required' && (
          <p className="error">Please set a Dive Site</p>
        )}
        {errors.divesite && errors.divesite.type === 'maxLength' && (
          <p className="error">Nice try bot!</p>
        )}
        {errors.divesite && errors.divesite.type === 'pattern' && (
          <p className="error">You sure, this is a Dive Site?</p>
        )}
        <input
          type="text"
          className="form__input"
          placeholder="Dive Center"
          name="divecenter"
          ref={register({ required: true, maxLength: 40, pattern: /[A-Za-z]/ })}
        />
        {errors.divecenter && errors.divecenter.type === 'required' && (
          <p className="error">Please set a Dive Center</p>
        )}
        {errors.divecenter && errors.divecenter.type === 'maxLength' && (
          <p className="error">Nice try bot!</p>
        )}
        {errors.divecenter && errors.divecenter.type === 'pattern' && (
          <p className="error">You sure, this is a Dive Center?</p>
        )}
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
        <h4>Diving Weights</h4>
        <input
          type="number"
          className="form__input"
          placeholder="Weights in kg"
          name="weight"
          ref={register({ min: 0, max: 20 })}
        />
        {errors.weight && errors.weight.type === 'min' && (
          <p className="error">Sorry buddy, but I need a valid number.</p>
        )}
        {errors.weight && errors.weight.type === 'max' && (
          <p className="error">No one can carry that much under water!</p>
        )}
        <label htmlFor="waterType">
          <h4>Water type</h4>
        </label>
        <select name="watertype" id="wt" ref={register({ required: true })}>
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
        {errors.watertype && (
          <p className="error">Please set a type of water</p>
        )}
        <h4>Weather Conditions</h4>
        <Radiogroup className="radiowrapper">
          {/* <div className="radio__container">
            <input
              type="radio"
              className="radio__button"
              name="weather"
              id="sunny"
            />
            <label htmlFor="weather" className="radio__label">
              <div className="radio__indicator"></div>
              <span className="radio__text">Sunny</span>
            </label>
          </div>
          <div className="radio__container">
            <input
              type="radio"
              className="radio__button"
              name="weather"
              id="cloudy"
            />
            <label htmlFor="weather" className="radio__label">
              <div className="radio__indicator"></div>
              <span className="radio__text">Cloudy</span>
            </label>
          </div>
          <div className="radio__container">
            <input
              type="radio"
              className="radio__button"
              name="weather"
              id="rainy"
            />
            <label htmlFor="weather" className="radio__label">
              <div className="radio__indicator"></div>
              <span className="radio__text">Rainy</span>
            </label>
          </div> */}
          <Radio name="weather" id="sunny" ref={register}>
            Sunny
          </Radio>
          <Radio name="weather" id="cloudy" ref={register}>
            Cloudy
          </Radio>
          <Radio name="weather" id="rainy" ref={register}>
            Rainy
          </Radio>
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
          ref={register({ min: 30, max: 300 })}
        />
        {errors.entryAir && errors.entryAir.type === 'min' && (
          <p className="error">It seems, that this is really dangerous!</p>
        )}
        {errors.entryAir && errors.entryAir.type === 'max' && (
          <p className="error">Are you sure, you need that much?</p>
        )}
      </section>
      <section className="form__values__exit container">
        <label htmlFor="exitTime">
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
          ref={register({ min: 0, max: 290 })}
        />
        {errors.exitAir && errors.exitAir.type === 'min' && (
          <p className="error">Sorry buddy, but I need a valid number.</p>
        )}
        {errors.exitAir && errors.exitAir.type === 'max' && (
          <p className="error">You sure, you didn't breathe?</p>
        )}
      </section>
      {/* <section className="form__dive conditions container">
        
      </section> */}
      <section className="form__dive typeOfDive container">
        <label htmlFor="typeOfDive">
          <h4>Type of Dive</h4>
        </label>
        {/* <Checkbox name="fun" id="fun" ref={register} image={Fun} /> */}
        <div className="form__dive__checkboxes">
          <Checkbox name="fun" id="fun" ref={register} />
          <Checkbox name="drift" id="drift" ref={register} />
          <Checkbox name="night" id="night" ref={register} />
          <Checkbox name="deep" id="deep" ref={register} />
          <Checkbox name="cave" id="cave" ref={register} />
          <Checkbox name="wreck" id="wreck" ref={register} />
          <Checkbox name="rescue" id="rescue" ref={register} />
          <Checkbox name="ice" id="ice" ref={register} />
          {/* checkboxes.map => checkbox {
            <div className="checkbox">
            <p>{checkbox}</p>
            <input type="checkbox" className="form__input" name={checkbox} ref={{register}} id={checkbox} />
          } */}
          {/* <div className="checkbox" name="fun">
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
          </div> */}
        </div>
      </section>
      <section className="form__dive conditions container">
        <h4>Time for a picture of your dive</h4>
        <FileInput
          name="image"
          onChange={handleChange}
          onSubmit={handleUpload}
          text="Upload"
        />
        {/* <input
          type="file"
          name="image"
          onChange={handleChange}
          onSubmit={handleUpload}
        /> */}
        {/* <button onClick={handleUpload}>Upload</button> */}
      </section>
      <section className="form__text container">
        <Description
          id=""
          style={{ resize: 'none' }}
          cols="30"
          rows="10"
          name="description"
          placeholder="Describe your dive..."
          ref={register({ maxLength: 160 })}
        ></Description>
        {errors.description && errors.description.type === 'maxLength' && (
          <p className="error">Please dont write a book.</p>
        )}
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
  padding: 12px;
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
    width: 70%;
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
  /* .date {
    height: 28px;
  } */
  input[type='date'] {
    height: 28px;
    width: 70%;
    color: rgba(62, 100, 255, 0.3);
    box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
    -webkit-box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
    -moz-box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;
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
    /* color: #ecfcff; */
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
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 5px;
    /* align-items: center;
    flex-wrap: wrap; */
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
  /* ::border: none; */
`

const Radiogroup = styled.div`
  display: flex;
  width: 80%; /* align-items: center; */ /* padding: 4px; */
  /* justify-content: space-between; */
  .radio__label {
    display: block;
    position: relative;
    /* padding-left: 35px; */
    /* margin-bottom: 12px; */
    cursor: pointer;
    /* font-size: 22px; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .radio__label:checked ~ .radio__indicator {
    background-color: #001a83;
    box-shadow: inset 3px 3px 4px #001464, inset -3px -3px 4px #0020a2;
  }

  .radio__indicator:after {
    content: '';
    position: absolute;
    display: none;
  }

  .radio__label input:checked ~ .radio__indicator:after {
    display: block;
  }

  .radio__label .radio__indicator:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  .radio__button {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .radio__indicator {
    position: relative;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: linear-gradient(70deg, #001776, #001c8c);
    box-shadow: 3px 3px 4px #001464, -3px -3px 4px #0020a2;
    border-radius: 50%;
  }

  /* padding: 4px 6px;
  margin: 8px 0;
  .radio__button {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1e-5;
    pointer-events: none;
  }
  .radio__label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
  }
  .radio__indicator {
    position: relative;
    border-radius: 50%;
    height: 12px;
    width: 12px; */
  /* box-shadow: -2px -1px 2px 0px #ffffff, 2px 1px 3px 0px #000d41;
    overflow: hidden;
  }
  .radio__indicator::before,
  .radio__indicator::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    height: 80%;
    width: 80%;
    border-radius: 50%;
  }

  .radio__indicator::before {
    box-shadow: -2px -1px 2px 0px #d1d9e6, 2px 1px 4px 0px #fff;
  }

  .radio__indicator::after {
    /* background-color: #000d41; */
  /* box-shadow: -2px -1px 2px 0px #fff, 2px 1px 4px 0px #d1d9e6; */
  /* transform: scale3d(1, 1, 1);
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .radio__button:checked ~ .radio__label .radio__indicator::after {
    transform: scale3d(0.975, 0.975, 1) translate3d(0, 10%, 0);
    opacity: 0;
  }
  .radio__button:focus ~ .radio__label .radio__text {
    transform: translate3d(4px, 0, 0);
    opacity: 1;
  }
  .radio__label:hover .radio__text {
    opacity: 1;
  }
  .radio__text {
    /* margin-left: 16px; */
  /* opacity: 0.6; */
  /* transition: opacity 0.2s linear, transform 0.2s ease-out; */
  /* } */
`
