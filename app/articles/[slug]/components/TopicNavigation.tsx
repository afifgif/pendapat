'use client'

import { useState } from 'react'
import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

const topics = [
  'Terkini',
  'Isu Semasa',
  'Sukan',
  'Politik',
  'Ekonomi',
  'Covid-19',
  'Sosial',
  'Lagi',
]

export function TopicNavigation() {
  const [activeTopic, setActiveTopic] = useState('Isu Semasa')

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '8px 0'
    }}>
      <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        height: '42px'
      }}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            style={{
              padding: '9px 17px',
              borderRadius: '10px',
              backgroundColor: activeTopic === topic ? colors.secondary[500] : colors.neutral[100],
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Typography 
              variant="paragraph-small-regular"
              style={{
                color: activeTopic === topic ? 'white' : colors.base.dark,
                fontFamily: 'Euclid Circular A',
                fontSize: '16px',
                fontWeight: activeTopic === topic ? 600 : 500,
                whiteSpace: 'nowrap'
              }}
            >
              {topic}
            </Typography>
          </button>
        ))}
      </div>
      <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        {/* Social links would go here - using placeholder for now */}
      </div>
    </div>
  )
}

