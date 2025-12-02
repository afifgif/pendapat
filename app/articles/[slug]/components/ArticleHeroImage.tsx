'use client'

import { colors } from '@/tokens'

interface ArticleHeroImageProps {
  imageUrl: string
  alt: string
}

export function ArticleHeroImage({ imageUrl, alt }: ArticleHeroImageProps) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '813px',
      height: '386px',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#021519'
    }}>
      <img 
        src={imageUrl} 
        alt={alt}
        crossOrigin="anonymous"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          if (target.parentElement) {
            target.parentElement.style.background = colors.neutral[200]
            target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999;font-size:18px">Image not available</div>'
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  )
}


