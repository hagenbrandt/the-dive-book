import React, { useRef, useState } from 'react'
import { Measure } from 'react-measure'
import { useUserMedia } from '../hooks/useUserMedia'
import { useCardRatio } from '../hooks/useCardRatio'

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
}

function Camera() {
  const videoRef = useRef()
  const mediaStream = useUserMedia(CAPTURE_OPTIONS)
  const [container, setContainer] = useState({ height: 0 })
  const [aspectRatio, setAspectRatio] = useCardRatio(1.586)

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
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

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ height: `${container.height}px` }}>
          <video
            ref={videoRef}
            onCanPlay={handleCanPlay}
            autoPlay
            playInline
            muted
          />
        </div>
      )}
    </Measure>
  )
}
