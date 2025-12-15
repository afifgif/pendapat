'use client'

import { useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined
  fallback?: React.ReactNode
  showPlaceholder?: boolean
}

export function Image({ 
  src, 
  alt, 
  fallback, 
  showPlaceholder = true,
  onError,
  style,
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true)
    if (onError) {
      onError(e)
    }
  }

  if (error || !src) {
    if (fallback) return <>{fallback}</>
    if (showPlaceholder) {
      return (
        <div 
          style={{
            width: '100%',
            height: '100%',
            background: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#ccc',
            ...style
          }}
        >
          {alt || 'Image'}
        </div>
      )
    }
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      style={style}
      {...props}
    />
  )
}







