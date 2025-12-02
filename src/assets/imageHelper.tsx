/**
 * Image Helper Component
 * Handles image loading errors gracefully
 */

'use client'

import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  style?: React.CSSProperties
  [key: string]: any
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  style,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      } else {
        // Create a placeholder data URL for broken images
        setImgSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjhmOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjY2NiY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4=')
      }
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={style}
      {...props}
    />
  )
}



