/**
 * Image utility functions
 */

'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to check if image URL is accessible
 */
export function useImageLoad(src: string | undefined) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!src) {
      setHasError(true)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    
    img.onload = () => {
      setIsLoaded(true)
      setHasError(false)
    }
    
    img.onerror = () => {
      setHasError(true)
      setIsLoaded(false)
    }
    
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { isLoaded, hasError }
}

/**
 * Image component with automatic error handling
 */
interface ImageWithErrorHandlingProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string | undefined
  fallback?: React.ReactNode
  showPlaceholder?: boolean
}

export function ImageWithErrorHandling({
  src,
  alt,
  fallback,
  showPlaceholder = true,
  style,
  ...props
}: ImageWithErrorHandlingProps) {
  const [error, setError] = useState(false)
  const { hasError } = useImageLoad(src)

  if (error || hasError) {
    if (fallback) return <>{fallback}</>
    if (showPlaceholder) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          background: '#f8f8f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#ccc',
          ...style
        }}>
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
      onError={() => setError(true)}
      crossOrigin="anonymous"
      style={style}
      {...props}
    />
  )
}



