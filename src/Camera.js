import React, { useState } from 'react'
import styled from 'styled-components'
import { Camera } from './camera/index'

export function CameraSite({
  cardImage,
  setCardImage,
  camUrl,
  setCamUrl,
  handleCamUpload,
}) {
  const [isCameraOpen, setIsCameraOpen] = useState(false)

  return (
    <>
      {isCameraOpen && (
        <Camera
          onCapture={(blob) => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}

      {cardImage && (
        <ContainerTwo>
          <h2>Preview</h2>
          <Preview src={cardImage && URL.createObjectURL(cardImage)} />
        </ContainerTwo>
      )}
      <Button type="button" name="openCamera" onClick={() => setIsCameraOpen(true)}>
        Open Camera
      </Button>
      <Button
        type="button"
        onClick={() => {
          setIsCameraOpen(false)
          setCardImage()
        }}
      >
        Close Camera
      </Button>
      <Button type="button" name="uploadCamPic" onClick={handleCamUpload}>
        Upload Cam pic
      </Button>
    </>
  )
}

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Preview = styled.img`
  width: 100%;
  height: auto;
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

export const ImageContext = React.createContext(CameraSite.effectImage)
