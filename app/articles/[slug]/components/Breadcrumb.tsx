'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

interface BreadcrumbProps {
  category: string
}

export function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      width: '100%'
    }}>
      <Typography 
        variant="paragraph-small-regular"
        style={{
          color: colors.neutral[400],
          fontFamily: 'Euclid Circular A',
          fontSize: '16px'
        }}
      >
        Artikel
      </Typography>
      <div style={{
        width: '24px',
        height: '24px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={icons.arrowRight} 
            alt=""
            style={{
              width: '16px',
              height: '16px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
      <Typography 
        variant="paragraph-small-regular"
        style={{
          color: colors.base.dark,
          fontFamily: 'Euclid Circular A',
          fontSize: '16px'
        }}
      >
        {category}
      </Typography>
    </div>
  )
}

