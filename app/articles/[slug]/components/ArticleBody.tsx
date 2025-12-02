'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

interface ArticleBodyProps {
  content: string
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%'
    }}>
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          color: colors.base.dark,
          lineHeight: 'normal',
          fontSize: '14px',
          fontFamily: 'Euclid Circular A',
          fontWeight: 400,
          letterSpacing: '0px'
        }}
      />
    </article>
  )
}


