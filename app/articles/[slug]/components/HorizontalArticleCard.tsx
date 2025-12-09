'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

interface HorizontalArticleCardProps {
  imageUrl: string
  title: string
  author: string
  alt?: string
}

export function HorizontalArticleCard({ imageUrl, title, author, alt }: HorizontalArticleCardProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '245px',
      flexShrink: 0
    }}>
      <div style={{
        width: '100%',
        height: '136px',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: colors.neutral[100],
        position: 'relative'
      }}>
        <img 
          src={imageUrl} 
          alt={alt || title}
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.style.background = colors.neutral[200]
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
      <Typography 
        variant="paragraph-small-bold"
        style={{
          color: colors.base.dark,
          fontFamily: 'Euclid Circular A',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '2px',
          lineHeight: 'normal'
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="caption-regular"
        style={{
          color: colors.secondary[400],
          fontFamily: 'Euclid Circular A',
          fontSize: '12px',
          lineHeight: '20px'
        }}
      >
        {author}
      </Typography>
    </div>
  )
}

