import React, { useState } from 'react'
import styled from 'styled-components'
import { storage } from './firebase'
import { Camera } from './camera/index'

export function CameraSite() {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [cardImage, setCardImage] = useState()

  function handleCamUpload() {
    // debugger
    // var storageRef = storage.ref()
    // storageRef.put(cardImage).then(function(snapshot) {
    //   console.log('Uploaded a blob or file!')
    // })
    const uploadTask = storage.ref(`campics/name`).put(cardImage)
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        // storage
        //   .ref('campics')
        //   .child(cardImage)
        //   .getDownloadURL()
        //   .then(url => {
        //     setUrl(url)
        //   })
      }
    )
  }

  return (
    <>
      {isCameraOpen && (
        <Camera
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}

      {cardImage && (
        <ContainerTwo>
          <h2>Preview</h2>
          <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          {console.log(cardImage)}
        </ContainerTwo>
      )}
      <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
      <button
        onClick={() => {
          setIsCameraOpen(false)
          setCardImage()
        }}
      >
        Close Camera
      </button>
      <button onClick={handleCamUpload}>Upload Cam pic</button>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Preview = styled.img`
  width: 100%;
  height: auto;
`
