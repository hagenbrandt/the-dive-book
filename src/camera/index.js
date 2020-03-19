import React, { useRef, useState } from 'react'
import { Measure } from 'react-measure'
import styled, { css, keyframes } from 'styled-components'
import { useUserMedia } from '../hooks/useUserMedia'
import { useCardRatio } from '../hooks/useCardRatio'
import { useOffsets } from '../hooks/useOffsets'

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
}

function Camera() {
  const videoRef = useRef()
  const mediaStream = useUserMedia(CAPTURE_OPTIONS)
  const [container, setContainer] = useState({ height: 0 })
  const [aspectRatio, setAspectRatio] = useCardRatio(1.586)
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  )

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  function handleResize(contentRect) {
    setContainer({
      height: Math.round(contentRect.bounds.width / aspectRatio),
      width: contentRect.bounds.width,
    })
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth)
    setAspectRatio(videoRef.current.videoHeight, videoRef.current.videoWidth)
    videoRef.current.play()
  }

  function handleResize(contentRect) {
    setContainer({
      height: Math.round(contentRect.bounds.width / aspectRatio),
    })
  }

  function handleCapture() {
    const context = canvasRef.current.getContext('2d')
    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    )

    canvasRef.current.toBlob(blob => onCapture(blob), 'image/jpeg', 1)
    setIsCanvasEmpty(false)
  }

  function handleClear() {
    const context = canvasRef.current.getContext('2d')
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    onClear()
    setIsCanvasEmpty(true)
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div>
          <div ref={measureRef} style={{ height: `${container.height}px` }}>
            <video
              ref={videoRef}
              onCanPlay={handleCanPlay}
              style={{ top: `-${offsets.y}px`, left: `-${offsets.x}px` }}
              autoPlay
              playInline
              muted
            />
          </div>

          <button onClick={isCanvasEmpty ? handleCapture : handleClear}>
            {isCanvasEmpty ? 'Take a picture' : 'Take another picture'}
          </button>
        </div>
      )}
    </Measure>
  )
}

const flashAnimation = keyframes`
    from {
        opacity: 0.75
    }

    to {
        opacity: 0
    }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

const Video = styled.video`
  position: absolute;

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;
`

const Flash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: #ffffff;

  ${({ flash }) => {
    if (flash) {
      return css`
        animation: ${flashAnimation} 750ms ease-out;
      `
    }
  }}
`

const Button = styled.button`
  width: 75%;
  min-width: 100px;
  max-width: 250px;
  margin-top: 24px;
  padding: 12px 24px;
  background: silver;
`
