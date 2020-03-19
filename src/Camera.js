import React, { useState } from 'react'
import styled from 'styled-components'
import { Camera } from './camera/index'

export function CameraSite() {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [cardImage, setCardImage] = useState()

  return (
    <>
      {isCameraOpen && (
        <Camera
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}

      {cardImage && (
        <div>
          <h2>Preview</h2>
          <Preview src={cardImage && URL.createObjectURL(cardImage)} />
        </div>
      )}
      <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
      <button
        onClick={() => {
          setIsCameraOpen(false)
          setCardImage(undefined)
        }}
      >
        Close Camera
      </button>
    </>
  )
}

const Preview = styled.img`
  width: 100%;
  height: auto;
`
