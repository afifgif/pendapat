'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

interface ArticleContentHeaderProps {
  title: string
  date: string
  author: string
}

export function ArticleContentHeader({ title, date, author }: ArticleContentHeaderProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%'
    }}>
      {/* Title */}
      <Typography 
        variant="heading-h2-bold" 
        style={{ 
          color: colors.base.dark,
          fontFamily: 'Euclid Circular A',
          fontSize: '32px',
          fontWeight: 700,
          letterSpacing: '2px',
          lineHeight: 'normal'
        }}
      >
        {title}
      </Typography>

      {/* Metadata - By Author — Date format */}
      <Typography 
        variant="caption-regular"
        style={{
          color: colors.base.dark,
          fontFamily: 'Euclid Circular A',
          fontSize: '14px',
          lineHeight: 'normal'
        }}
      >
        <span style={{ color: colors.neutral[600] }}>By</span>{' '}
        <span style={{ textDecoration: 'underline' }}>{author}</span>
        <span>{' — '}</span>
        <span style={{ color: colors.neutral[600] }}>{date}</span>
      </Typography>
    </div>
  )
}

