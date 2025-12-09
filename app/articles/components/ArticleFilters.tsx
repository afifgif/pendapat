'use client'

import { useState } from 'react'
import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

const categories = [
  'Semua',
  'Isu Semasa',
  'Sukan',
  'Politik',
  'Ekonomi',
  'Teknologi',
]

export function ArticleFilters() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      padding: '20px 0'
    }}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          style={{
            padding: '10px 24px',
            borderRadius: '10px',
            border: `1px solid ${selectedCategory === category ? colors.secondary[500] : colors.neutral[200]}`,
            backgroundColor: selectedCategory === category ? colors.secondary[500] : 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <Typography 
            variant="paragraph-small-regular"
            style={{
              color: selectedCategory === category ? 'white' : colors.neutral[600],
              fontFamily: 'Euclid Circular A',
              fontSize: '16px',
              fontWeight: 500,
              whiteSpace: 'nowrap'
            }}
          >
            {category}
          </Typography>
        </button>
      ))}
    </div>
  )
}


