/**
 * Helper function to create image components with error handling
 */

'use client'

import { useState } from 'react'

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string
  fallbackColor?: string
}

export function SafeImage({ 
  src, 
  alt, 
  fallbackText, 
  fallbackColor = '#f8f8f8',
  style,
  ...props 
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true)
      const target = e.target as HTMLImageElement
      // Create a placeholder div
      const placeholder = document.createElement('div')
      placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        background: ${fallbackColor};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #ccc;
        border-radius: 4px;
      `
      placeholder.textContent = fallbackText || alt || 'Image'
      target.style.display = 'none'
      if (target.parentElement) {
        target.parentElement.appendChild(placeholder)
      }
    }
  }

  if (hasError && fallbackText) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: fallbackColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: '#ccc',
        ...style
      }}>
        {fallbackText}
      </div>
    )
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      crossOrigin="anonymous"
      style={style}
      {...props}
    />
  )
}










