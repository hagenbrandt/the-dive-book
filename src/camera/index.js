import React, { useRef, useState } from 'react'
import Measure from 'react-measure'
import styled, { css, keyframes } from 'styled-components'
import { useUserMedia } from '../hooks/useUserMedia'
import { useCardRatio } from '../hooks/useCardRatio'
import { useOffsets } from '../hooks/useOffsets'

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
}

export function Camera({ onCapture, onClear }) {
  const canvasRef = useRef()
  const videoRef = useRef()

  const [container, setContainer] = useState({ width: 0, height: 0 })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true)
  const [isFlashing, setIsFlashing] = useState(false)

  const mediaStream = useUserMedia(CAPTURE_OPTIONS)
  const [aspectRatio, calculateRatio] = useCardRatio(1.586)
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
      width: contentRect.bounds.width,
      height: Math.round(contentRect.bounds.width / aspectRatio),
    })
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth)
    setIsVideoPlaying(true)
    videoRef.current.play()
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

    context.save()
    console.log(context)
    const dataURL = context.toDataURL
    console.log(dataURL)

    setIsCanvasEmpty(false)
    setIsFlashing(true)
  }

  function handleClear() {
    const context = canvasRef.current.getContext('2d')
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    setIsCanvasEmpty(true)
    onClear()
  }

  if (!mediaStream) {
    return null
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`,
            }}
          >
            <Preview>
              <Video
                ref={videoRef}
                hidden={!isVideoPlaying}
                onCanPlay={handleCanPlay}
                autoPlay
                playsInline
                muted
                style={{
                  top: `-${offsets.y}px`,
                  left: `-${offsets.x}px`,
                }}
              />

              <Overlay hidden={!isVideoPlaying} />

              <Canvas
                ref={canvasRef}
                width={container.width}
                height={container.height}
              />
            </Preview>

            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            />
          </Container>

          {isVideoPlaying && (
            <Button
              type="button"
              onClick={isCanvasEmpty ? handleCapture : handleClear}
            >
              {isCanvasEmpty ? 'Take a picture' : 'Take another picture'}
            </Button>
          )}
        </Wrapper>
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

const Preview = styled.div`
  display: grid;
  grid-template-columns: 80%;
  grid-template-rows: auto;
  justify-items: center;
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
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
