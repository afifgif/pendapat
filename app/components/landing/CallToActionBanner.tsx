'use client'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'

export function CallToActionBanner() {
  return (
    <section style={{
      backgroundColor: '#05966d',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 100px',
      width: 'calc(100% + 200px)',
      marginLeft: '-100px',
      marginRight: '-100px'
    }}>
      <Typography 
        variant="heading-h2-bold" 
        as="h2"
        style={{ 
          color: 'white',
          textAlign: 'center',
          letterSpacing: '1px',
          maxWidth: '1040px',
          marginTop: '20px',
        }}
      >
        Data peribadi anda mungkin telah dijual.
      </Typography>
      
      <Typography 
        variant="subheadline-regular"
        style={{ 
          color: 'white',
          textAlign: 'center',
          letterSpacing: '1px',
          maxWidth: '1040px',
          marginBottom: '20px',
        }}
      >
        22.5 juta rakyat Malaysia terlibat di dalam kebocoran data melibatkan nama penuh, nombor ic, alamat rumah, nombor telefon dan foto ID. Semua data ini dicuri daripada server kerajaan dan dijual di pasaran dark web pada harga US$10,000.
      </Typography>
      
      <div style={{
        backgroundColor: 'white',
        border: `1px solid white`,
        borderRadius: '10px',
        padding: '8px 50px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
          variant="button"
          style={{ 
            color: 'black',
            letterSpacing: '1px',
            fontWeight: '400',
          }}
        >
          Mula Soal Selidik
        </Typography>
      </div>
    </section>
  )
}

