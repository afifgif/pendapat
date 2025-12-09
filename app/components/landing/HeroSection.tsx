'use client'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { Image } from '@/components/Image'
import { images, icons } from '@/assets/assets'

export function HeroSection() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      gap: '40px',
      padding: '0'
    }}>
      {/* Hero Text Block */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'flex-start',
        flex: 1,
        maxWidth: '531px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <Typography variant="heading-h1-bold" as="h1" style={{ letterSpacing: '2px' }}>
            Kebocoran Data Peribadi di Malaysia
          </Typography>
          <Typography variant="subheadline-regular" style={{ letterSpacing: '2px' }}>
            Mengapa ia terjadi?
          </Typography>
        </div>
        
        <Button variant="secondary" size="large">
          Mula Soal Selidik
        </Button>
      </div>

      {/* Hero Visual */}
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        {/* Pink Circle Decorative Element - positioned first (behind) */}
        <div style={{
          position: 'absolute',
          left: 'calc(87.5% - 1.54px)',
          top: '224.46px',
          width: '292.645px',
          height: '292.645px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        }}>
          <div style={{
            transform: 'rotate(113.858deg) scaleY(-1)',
            width: '221.865px',
            height: '221.865px',
            position: 'relative'
          }}>
            <img 
              src={images.pinkCircle} 
              alt=""
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
        
        {/* Subject Image */}
        <div style={{
          position: 'relative',
          width: '333.103px',
          height: '352.802px',
          marginLeft: '41.19px',
          zIndex: 2,
          overflow: 'hidden'
        }}>
          <img 
            src={images.subjectImage} 
            alt="Person with smartphone"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
        
        {/* Powered By Badge */}
        <div style={{
          position: 'absolute',
          left: '247px',
          top: '255px',
          backgroundColor: 'white',
          padding: '12px',
          borderRadius: '8.954px',
          display: 'flex',
          gap: '13.432px',
          alignItems: 'center',
          height: '62.681px',
          zIndex: 3
        }}>
          <Typography variant="caption-bold" style={{ 
            fontSize: '14px',
            textTransform: 'capitalize',
            fontFamily: 'Euclid Circular A',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '0px'
          }}>
            Kajian ini Dikuasakan Oleh
          </Typography>
          <div style={{
            width: '31.774px',
            height: '44.772px',
            position: 'relative'
          }}>
            <Image 
              src={icons.ioFoundationFrame} 
              alt="IO Foundation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

