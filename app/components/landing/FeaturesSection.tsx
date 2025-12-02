'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { images } from '@/assets/assets'

interface FeatureCardProps {
  iconUrl: string
  title: string
  description: string
}

function FeatureCard({ iconUrl, title, description }: FeatureCardProps) {
  return (
    <div style={{
      flex: 1,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
      padding: '48px',
      borderRadius: '16px',
      minHeight: '100%'
    }}>
      {/* Icon */}
      <div style={{
        width: '54.966px',
        height: '52px',
        position: 'relative',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img 
          src={iconUrl} 
          alt=""
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            if (target.parentElement) {
              target.parentElement.style.background = '#0b9446'
            }
          }}
          style={{
            width: '47.567px',
            height: '45px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
      
      {/* Title */}
      <Typography variant="subheadline-bold" style={{ 
        textAlign: 'center',
        letterSpacing: '2px'
      }}>
        {title}
      </Typography>
      
      {/* Description */}
      <Typography variant="paragraph-small-regular" style={{ 
        textAlign: 'center',
        color: colors.base.black
      }}>
        {description}
      </Typography>
    </div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      iconUrl: images.featureIcon1,
      title: 'Interaksi bersama komuniti',
      description: 'Suarakan pandangan dengan kritis dan jelas'
    },
    {
      iconUrl: images.featureIcon2,
      title: 'Sentiasa peka pada isu-isu semasa',
      description: 'Melahirkan generasi yang sentiasa mengambil tahu.'
    },
    {
      iconUrl: images.featureIcon3,
      title: 'Ketahui fakta melalui data dunia sebenar',
      description: 'Memanfaatkan data untuk kebaikan bersama.'
    },
    {
      iconUrl: images.featureIcon4,
      title: 'Perjuangkan hak digital anda',
      description: 'Hak digital anda adalah kebebasan bersuara anda.'
    }
  ]

  return (
    <section style={{
      backgroundColor: colors.neutral[100],
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 100px',
      width: '100%'
    }}>
      <Typography variant="heading-h2-bold" as="h2" style={{ 
        textAlign: 'center',
        letterSpacing: '2px',
        maxWidth: '828px'
      }}>
        Sertai kaji selidik dan nyatakan pendapat anda tentang isu ini.
      </Typography>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        width: '100%'
      }}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

