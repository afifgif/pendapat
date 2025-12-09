'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

export function ArticleHeader() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      padding: '40px 0'
    }}>
      <Typography 
        variant="heading-h1-bold" 
        style={{ 
          color: colors.secondary[500],
          letterSpacing: '2px'
        }}
      >
        Artikel
      </Typography>
      <Typography 
        variant="paragraph-01-regular" 
        style={{ 
          color: colors.neutral[600],
          maxWidth: '800px'
        }}
      >
        Baca artikel terkini tentang isu-isu semasa, sukan, dan topik-topik menarik lainnya.
      </Typography>
    </div>
  )
}


