import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { storage } from './firebase'
import uuid from 'react-uuid'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import { postLogs } from './services'
import StyledSelect from './form/Select'
import Radio from './form/Radio'
import Checkbox from './form/Checkboxes'
import FileInput from './form/FileInput'
import { CameraSite, ImageContext } from './Camera'
import Fun from './img/icons/checkboxes/Fun.svg'

export default function LogBook() {
  const [image, setImage] = useState(null)
  const [cardImage, setCardImage] = useState()
  const [camUrl, setCamUrl] = useState()
  const [url, setUrl] = useState()
  const { register, errors, reset, handleSubmit } = useForm({
    defaultValues: { id: uuid(), img: url, camPic: camUrl },
    submitFocusError: true,
  })

  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },
  // }))

  // const classes = useStyles()

  useEffect(() => {
    console.log('CardImage :', cardImage)
  }, [cardImage])

  useEffect(() => {
    console.log('Cam URL ', camUrl)
  }, [camUrl])

  function handleCamUpload() {
    const camPicName = String(Date.now())
    const uploadTask = storage.ref(`campics/${camPicName}`).put(cardImage)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.error(error)
      },
      () => {
        storage
          .ref('campics')
          .child(camPicName)
          .getDownloadURL()
          .then((url) => {
            console.log(url)

            setCamUrl(url)
          })
      }
    )
  }

  const handleUpload2 = (cb) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.error(error)
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            cb(url)
          })
      }
    )
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
      console.log('Check image:', e.target)
    }
  }

  function onSubmit(data) {
    image
      ? handleUpload2((url) => {
          postLogs({
            ...data,
            img: url,
          })
        })
      : postLogs(data)
    reset()
  }

  const suitTypes = [
    '3mmshort',
    '5mmshort',
    '3mmlong',
    '5mmlong',
    '7mmlong',
    'dry',
  ]

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <section className="form__dates container">
        <label htmlFor="date">
          <h4>Date</h4>
        </label>
        <input className="form__dates__id" name="id" ref={register} />
        <input
          className="form__dates__id"
          name="camPic"
          value={camUrl}
          ref={register}
        />
        <Input
          type="date"
          className="form__input date"
          name="date"
          ref={register({ required: true })}
        />
        <label htmlFor="diveNumber">
          <h4>Dive No.</h4>
        </label>
        <Input
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
        <Input
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
        <Input
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
        <Input
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
        <Input
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
        <Input
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
        <StyledSelect
          name="suitType"
          names={suitTypes}
          id="suitType"
          register={register}
        />
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
        <h4>Visability</h4>
        <input
          type="number"
          className="form__input"
          placeholder="Visability"
          name="visability"
          ref={register({ min: 0, max: 100 })}
        />
        {errors.weight && errors.weight.type === 'min' && (
          <p className="error">Sorry buddy, but I need a valid number.</p>
        )}
        {errors.weight && errors.weight.type === 'max' && (
          <p className="error">You are not an eagle!</p>
        )}
        <h4>Depth</h4>
        <input
          type="number"
          className="form__input"
          placeholder="max depth"
          name="depth"
          ref={register({ min: 0, max: 60 })}
        />
        {errors.weight && errors.weight.type === 'min' && (
          <p className="error">Sorry buddy, but I need a valid number.</p>
        )}
        {errors.weight && errors.weight.type === 'max' && (
          <p className="error">Are you sure, that you're allowed to do this?</p>
        )}
        <h4>Weather Conditions</h4>
        <Radiogroup className="radiowrapper">
          <Radio name="weather" id="sunny" register={register}>
            Sunny
          </Radio>
          <Radio name="weather" id="cloudy" register={register}>
            Cloudy
          </Radio>
          <Radio name="weather" id="rainy" register={register}>
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
      <section className="form__dive typeOfDive container">
        <label htmlFor="typeOfDive">
          <h4>Type of Dive</h4>
        </label>
        <div className="form__dive__checkboxes">
          <Checkbox name="fun" id="fun" register={register} />
          <Checkbox name="drift" id="drift" register={register} />
          <Checkbox name="night" id="night" register={register} />
          <Checkbox name="deep" id="deep" register={register} />
          <Checkbox name="cave" id="cave" register={register} />
          <Checkbox name="wreck" id="wreck" register={register} />
          <Checkbox name="rescue" id="rescue" register={register} />
          <Checkbox name="ice" id="ice" register={register} />
        </div>
      </section>
      <section className="form__dive conditions container">
        <h4>Upload a picture</h4>
        <FileInput
          name="image"
          onChange={handleChange}
          // onSubmit={handleUpload}
          text="Upload"
        />
      </section>
      <section className="form__text container">
        <Description
          id=""
          style={{ resize: 'none' }}
          cols="30"
          rows="10"
          name="description"
          placeholder="Describe your dive..."
          ref={register({ maxLength: 1000 })}
        ></Description>
        {errors.description && errors.description.type === 'maxLength' && (
          <p className="error">Please dont write a book.</p>
        )}
      </section>
      <section className="container">
        <h4>Save your stamp</h4>
        <CameraSite
          handleCamUpload={handleCamUpload}
          cardImage={cardImage}
          setCardImage={setCardImage}
        />
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
  background-color: #001a83;
  color: #3e64ff;
  padding: 12px;
  padding-bottom: 80px;
  gap: 12px;
  .container {
    display: grid;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    background: #001a83;
    box-shadow: inset 13px 13px 50px #00166f, inset -13px -13px 50px #001e97;
    border-radius: 50px;
    padding: 40px;
    margin: 40px 10px 10px;
    width: 80%;
  }
  .datepicker {
    background: red;
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
  button {
    color: #ecfcff;
    height: auto;
    width: 60%;
    padding: 6px;
    border-radius: 4px;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #000d41;
    box-shadow: inset 13px 13px 40px #000a31, inset -13px -13px 40px #001051;
  }
  .form__dive__checkboxes {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 5px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Description = styled.textarea`
  background-color: #001a83;
  color: rgb(236, 252, 255, 1);
  border: none;
  border-radius: 40px;
  padding: 12px;
  width: 95%;
  ::placeholder {
    color: rgb(236, 252, 255, 0.3);
  }
`

const Input = styled.input`
  border-radius: 4px;
  background: #001a83;
  border: none;
  height: 28px;
  width: 80%;
  margin-bottom: 16px;
  padding: 1em;
  color: rgb(236, 252, 255, 0.8);
  box-shadow: inset 3px 3px 5px #00166f, inset -3px -3px 5px #001e97;

  ::-webkit-datetime-edit-text {
    color: rgb(236, 252, 255, 0.3);
    /* padding: 0 0.3em; */
  }
  ::-webkit-datetime-edit-month-field {
    color: rgb(236, 252, 255, 0.3);
  }
  ::-webkit-datetime-edit-day-field {
    color: rgb(236, 252, 255, 0.3);
  }
  ::-webkit-datetime-edit-year-field {
    color: rgb(236, 252, 255, 0.3);
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    opacity: 0.3;
    margin: 0;
  }
  ::-webkit-datetime-edit {
    /* padding: 0.5em; */
  }
  ::placeholder {
    color: rgb(236, 252, 255, 0.3);
  }
`

const Radiogroup = styled.div`
  display: flex;
  width: 80%;
  .radio__label {
    display: block;
    position: relative;
    cursor: pointer;
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
`
