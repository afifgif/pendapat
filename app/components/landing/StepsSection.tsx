'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { images } from '@/assets/assets'

interface StepProps {
  stepNumber: string
  title: string
  description: string
  phoneMockup?: React.ReactNode
  phoneOnLeft?: boolean
}

function Step({ stepNumber, title, description, phoneMockup, phoneOnLeft = true }: StepProps) {
  const textContent = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '598px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        
      }}>
        <Typography 
          variant="heading-h4-bold" 
          style={{ 
            color: colors.secondary[500],
            textTransform: 'capitalize',
            letterSpacing: '1px',
            lineHeight: '120%'
          }}
        >
          {stepNumber}
        </Typography>
        
        <Typography variant="headline-04-bold" style={{ fontSize: '32px' }}>
          {title}
        </Typography>
        
        <Typography variant="subheadline-regular">
          {description}
        </Typography>
      </div>
    </div>
  )

  const phoneContent = phoneMockup && (
    <div style={{
      width: '422px',
      height: '748px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {phoneMockup}
    </div>
  )

  return (
    <div style={{
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}>
      {phoneOnLeft ? (
        <>
          {phoneContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {phoneContent}
        </>
      )}
    </div>
  )
}

interface PhoneMockupProps {
  imageUrl: string
  alt: string
}

function PhoneMockup({ imageUrl, alt }: PhoneMockupProps) {
  return (
    <div style={{
      width: '368px',
      height: '744px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img 
        src={imageUrl} 
        alt={alt}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          if (target.parentElement) {
            target.parentElement.style.background = colors.neutral[200]
            target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#999">Phone Image</div>'
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  )
}

export function StepsSection() {
  const steps = [
    {
      stepNumber: 'Langkah 1',
      title: 'Daftar menjadi komuniti pendapat.my',
      description: 'Jika anda masih belum, daftarlah segera untuk menjadi ahli Pendapat.my untuk mendapat kupasan topik-topik yang hangat.',
      phoneImage: images.phoneSample1,
      phoneAlt: 'Phone mockup for step 1'
    },
    {
      stepNumber: 'Langkah 2',
      title: 'Jawab dan kumpul poin',
      description: '1 poin = RM0.10',
      phoneImage: images.phoneSample3,
      phoneAlt: 'Phone mockup for step 2'
    },
    {
      stepNumber: 'Langkah 3',
      title: 'Tebus poin jadi wang ringgit',
      description: 'Lebih banyak kaji selidik yang disertai, lebih banyak poin = wang ringgit yang akan dimenangi!',
      phoneImage: images.phoneSample4,
      phoneAlt: 'Phone mockup for step 3'
    }
  ]

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 100px',
      width: '100%'
    }}>
      <Typography variant="heading-h2-bold" as="h2" style={{ 
        textAlign: 'center',
        letterSpacing: '1px',
        width: '100%'
      }}>
        Daftar, jawab dan menang dengan mudah!
      </Typography>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        {steps.map((step, index) => (
          <Step
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            phoneMockup={step.phoneImage ? <PhoneMockup imageUrl={step.phoneImage} alt={step.phoneAlt} /> : undefined}
            phoneOnLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}

