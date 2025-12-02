'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

export function ArticleShareButtons() {
  const shareOptions = [
    { name: 'Facebook', icon: icons.facebook, color: '#1877F2' },
    { name: 'Twitter', icon: icons.twitter, color: '#1DA1F2' },
    { name: 'WhatsApp', icon: icons.whatsapp, color: '#25D366' },
    { name: 'Telegram', icon: icons.telegram, color: '#0088CC' },
  ]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px 0',
      borderTop: `1px solid ${colors.neutral[200]}`,
      borderBottom: `1px solid ${colors.neutral[200]}`
    }}>
      <Typography 
        variant="paragraph-small-bold" 
        style={{ 
          color: colors.neutral[600],
          letterSpacing: '1px'
        }}
      >
        Kongsi Artikel
      </Typography>
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {shareOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              // In a real app, implement share functionality
              console.log(`Sharing to ${option.name}`)
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              borderRadius: '10px',
              border: `1px solid ${colors.neutral[200]}`,
              backgroundColor: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = option.color
              e.currentTarget.style.backgroundColor = `${option.color}10`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.neutral[200]
              e.currentTarget.style.backgroundColor = 'white'
            }}
          >
            <div style={{
              width: '20px',
              height: '20px',
              position: 'relative'
            }}>
              <img 
                src={option.icon} 
                alt={option.name}
                crossOrigin="anonymous"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <Typography 
              variant="caption-regular"
              style={{
                color: colors.neutral[600],
                fontFamily: 'Euclid Circular A',
                fontSize: '14px'
              }}
            >
              {option.name}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  )
}


