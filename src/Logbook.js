import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { storage } from './config/firebase/firebase'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { postLogs } from './services'
import StyledSelect from './form/Select'
import Slider from './form/Slider'
import Radio from './form/Radio'
import Checkbox from './form/Checkboxes'
import FileInput from './form/FileInput'
import { CameraSite } from './camera/CameraSite'

export default function LogBook() {
  const [image, setImage] = useState(null)
  const [cardImage, setCardImage] = useState()
  const [camUrl, setCamUrl] = useState()
  const [weights, setWeights] = useState(4)
  const [visability, setVisability] = useState(15)
  const [depth, setDepth] = useState(18)
  const [url] = useState()
  const { register, errors, reset, handleSubmit } = useForm({
    defaultValues: { id: uuid(), img: url, camPic: camUrl },
    submitFocusError: true,
  })

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
            setCamUrl(url)
          })
      }
    )
  }

  const handleUpload = (cb) => {
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
    }
  }

  function onSubmit(data) {
    image
      ? handleUpload((url) => {
          postLogs({
            ...data,
            img: url,
          })
        })
      : postLogs(data)
    reset()
  }

  const suitTypes = [
    '3 mm short',
    '5 mm short',
    '3 mm long',
    '5 mm long',
    '7 mm long',
    'dry',
  ]

  const waterTypes = ['salt water', 'fresh water', 'brackish water']

  const weatherTypes = ['Sunny', 'Cloudy', 'Rainy']

  const diveTypes = [
    'Fun',
    'Drift',
    'Night',
    'Deep',
    'Cave',
    'Wreck',
    'Rescue',
    'Ice',
  ]

  return (
    <LogBookForm onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <input className="form__dates__id" name="id" ref={register} />
        <input
          className="form__dates__id"
          name="camPic"
          value={camUrl}
          ref={register}
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
      </Container>
      <Container>
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
      </Container>
      <Container>
        <label htmlFor="suit">
          <h4>Suit Type</h4>
        </label>
        <StyledSelect
          name="suitType"
          names={suitTypes}
          id="suitType"
          placeholderName="--choose suit type--"
          register={register}
        />
        <h4>Diving Weights</h4>
        <Slider
          type="range"
          className="form__input"
          name="weights"
          min="0"
          max="20"
          step="0.5"
          value={weights}
          unit="kg"
          rangeState={weights}
          setRangeState={setWeights}
          register={register}
        />
        <label htmlFor="waterType">
          <h4>Water type</h4>
        </label>
        <StyledSelect
          name="watertype"
          names={waterTypes}
          id="watertype"
          placeholderName="--choose water type--"
          registerForSelect={register({ required: true })}
          register={register}
        />
        {errors.watertype && (
          <p className="error">Please set a type of water</p>
        )}
        <h4>Visability</h4>
        <Slider
          type="range"
          className="form__input"
          name="visability"
          min="0"
          max="100"
          steps="1"
          value={visability}
          unit="m"
          rangeState={visability}
          setRangeState={setVisability}
          register={register}
        />
        <h4>Depth</h4>
        <Slider
          type="range"
          className="form__input"
          name="depth"
          min="0"
          max="60"
          step="0.1"
          value={depth}
          unit="m"
          rangeState={depth}
          setRangeState={setDepth}
          registerForSelect={register}
          register={register}
        />
        <h4>Weather Conditions</h4>
        <Radio name="weather" categories={weatherTypes} value={weatherTypes} register={register} />
      </Container>
      <Container>
        <label htmlFor="entryTime">
          <h4>Entry</h4>
        </label>
        <label htmlFor="entryDate">
          <h4>Date / Time</h4>
        </label>
        <Input
          type="datetime-local"
          className="form__input"
          name="entryDateTime"
          ref={register}
        />
        <label htmlFor="entryAir">
          <p>Air</p>
        </label>
        <Input
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
      </Container>
      <Container>
        <label htmlFor="exitTime">
          <h4>Exit</h4>
        </label>
        <label htmlFor="exitDate">
          <p>Date / Time</p>
        </label>
        <Input
          type="datetime-local"
          className="form__input"
          name="exitDateTime"
          ref={register}
        />
        <label htmlFor="exitAir">
          <p>Air</p>
        </label>
        <Input
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
      </Container>
      <Container>
        <label htmlFor="typeOfDive">
          <h4>Type of Dive</h4>
        </label>
        <div className="form__dive__checkboxes">
          {diveTypes.map((diveType) => (
            <Checkbox name={diveType} id={diveType} register={register} />
          ))}
        </div>
      </Container>
      <Container>
        <h4>Upload a picture</h4>
        <FileInput name="image" onChange={handleChange} text="Upload" />
        <ImageName>{image ? image.name : ''}</ImageName>
      </Container>
      <Container>
        <Description
          id=""
          style={{ resize: 'none' }}
          cols="30"
          rows="10"
          name="description"
          placeholder="Describe your dive..."
          ref={register({ maxLength: 1000 })}
        />
        {errors.description && errors.description.type === 'maxLength' && (
          <p className="error">Please dont write a book.</p>
        )}
      </Container>
      <Container>
        <h4>Save your stamp</h4>
        <CameraSite
          handleCamUpload={handleCamUpload}
          cardImage={cardImage}
          setCardImage={setCardImage}
        />
      </Container>
      <Button name="submitButton" type="submit">Submit</Button>
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

const Container = styled.article`
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
`

const Description = styled.textarea`
  background-color: hsla(227, 96%, 26%, 1);
  color: rgb(236, 252, 255, 1);
  border: none;
  border-radius: 40px;
  padding: 14px;
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
  ::placeholder {
    color: rgb(236, 252, 255, 0.3);
  }
`

const ImageName = styled.p`
  font-size: 10px;
  color: rgb(236, 252, 255, 1);
`

const Button = styled.button`
  color: rgba(236, 252, 255, 1);
  height: auto;
  width: 80%;
  padding: 6px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  background: linear-gradient(145deg, #001c8c, #001776);
  box-shadow: 5px 5px 10px rgba(0, 15, 77, 1),
    -5px -5px 10px rgba(0, 37, 185, 1);
`
