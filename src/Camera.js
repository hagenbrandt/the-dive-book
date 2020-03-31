import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { storage } from './firebase'
import { Camera } from './camera/index'

export function CameraSite({
  cardImage,
  setCardImage,
  camUrl,
  setCamUrl,
  handleCamUpload,
}) {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  // const [camUrl, setCamUrl] = useState()

  let effectImage = cardImage

  //   console.log('effectImage :', effectImage)

  // function handleCamUpload() {
  //   // debugger
  //   // var storageRef = storage.ref()
  //   // storageRef.put(cardImage).then(function(snapshot) {
  //   //   console.log('Uploaded a blob or file!')
  //   // })
  //   const camPicName = String(Date.now())
  //   const uploadTask = storage.ref(`campics/${camPicName}`).put(cardImage)
  //   uploadTask.on(
  //     'state_changed',
  //     snapshot => {},
  //     error => {
  //       console.error(error)
  //     },
  //     () => {
  //       storage
  //         .ref('campics')
  //         .child(camPicName)
  //         .getDownloadURL()
  //         .then(url => {
  //           console.log(url)

  //           setCamUrl(url)
  //           // console.log(camUrl)
  //         })
  //     }
  //   )
  // }

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
      <button type="button" onClick={() => setIsCameraOpen(true)}>
        Open Camera
      </button>
      <button
        type="button"
        onClick={() => {
          setIsCameraOpen(false)
          setCardImage()
        }}
      >
        Close Camera
      </button>
      <button type="button" onClick={handleCamUpload}>
        Upload Cam pic
      </button>
      {/* <>[cardImage,setCardImage]</> */}
      {/* {console.log('Log from Camera: ', !!cardImage ? cardImage : '')} */}
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
export const ImageContext = React.createContext(CameraSite.effectImage)

// export let ImageContext = React.createContext(CameraSite.effectImage)
