'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

export function Footer() {
  const socialIcons = [
    { name: 'Facebook', icon: icons.facebook },
    { name: 'Instagram', icon: icons.instagram },
    { name: 'Twitter', icon: icons.twitter },
    { name: 'WhatsApp', icon: icons.whatsapp },
    { name: 'Telegram', icon: icons.telegram },
  ]
  
  return (
    <footer style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '20px 0'
    }}>
      <Typography 
        variant="paragraph-small-regular"
        style={{ color: colors.base.dark }}
      >
        © 2025 Pendapat. All rights reserved.
      </Typography>
      
      <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href="#"
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            title={social.name}
            aria-label={social.name}
          >
            <img 
              src={social.icon} 
              alt={social.name}
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                if (target.parentElement) {
                  const iconText = social.name[0].toUpperCase()
                  target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:12px;color:#151616">${iconText}</div>`
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}

