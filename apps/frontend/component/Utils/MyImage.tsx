import { Image as ImageMantine, ImageProps } from '@mantine/core'
import { Blurhash } from 'react-blurhash'
import React, { useEffect, useState } from 'react'

type PropsMyImage = ImageProps & {
  hash?: string | undefined
  aspectRatio?: string | undefined
}

export const MyImage = ({
  hash,
  alt,
  src,
  width,
  aspectRatio
}: PropsMyImage) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!src) return
    const image = new Image()
    image.onload = () => setImageLoaded(true)
    image.src = src
  }, [src])

  return (
    <div
      style={{
        width,
        aspectRatio
      }}
    >
      <div
        style={{
          display: imageLoaded ? 'none' : 'block',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <Blurhash
          hash={hash || 'cZRC[6j[~qRjj[%M?bfQ9F-;j[D%%Mj[WB'}
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div
        style={{
          display: !imageLoaded ? 'none' : 'block',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2
        }}
      >
        <ImageMantine alt={alt} src={src} onLoad={() => setImageLoaded(true)} />
      </div>
    </div>
  )
}
