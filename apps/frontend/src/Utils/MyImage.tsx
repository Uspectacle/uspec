import Image from 'next/image'

import { Blurhash } from 'react-blurhash'
import React, { useState } from 'react'

type PropsMyImage = React.ComponentProps<typeof Image> & {
  blurhash?: string | undefined
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | undefined
}

export const MyImage = ({
  blurhash,
  alt,
  src,
  width,
  height,
  style,
  priority,
  objectFit = 'contain'
}: PropsMyImage) => {
  const [imageLoaded, setImageLoaded] = useState(true)

  const containerStyle: React.CSSProperties = {
    ...(!!width && !!height ? { aspectRatio: `${width} / ${height}` } : {}),
    ...style
  }

  if (!blurhash) {
    return (
      <div style={containerStyle}>
        <Image
          src={src || ''}
          alt={alt || ''}
          width={width}
          fill={!width}
          height={height}
          onLoad={() => setImageLoaded(true)}
          priority={priority}
          style={{
            width: '100%',
            height: '100%',
            objectFit
          }}
        />
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: imageLoaded ? 'none' : 'block',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          objectFit
        }}
      >
        <Blurhash
          hash={blurhash || 'cZRC[6j[~qRjj[%M?bfQ9F-;j[D%%Mj[WB'}
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
        <Image
          src={src || ''}
          alt={alt || ''}
          width={width}
          fill={!width}
          height={height}
          onLoad={() => setImageLoaded(true)}
          priority={priority}
          style={{
            width: '100%',
            height: '100%',
            objectFit
          }}
        />
      </div>
    </div>
  )
}
