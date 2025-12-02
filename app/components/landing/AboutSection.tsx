'use client'

import { Typography } from '@/components/Typography'

export function AboutSection() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 220px',
      textAlign: 'center',
      width: '100%'
    }}>
      <Typography variant="heading-h2-bold" as="h2" style={{ letterSpacing: '2px' }}>
        The IO Foundation mempromosikan, melindungi dan menyediakan penyelesaian untuk hak digital.
      </Typography>
      
      <Typography variant="subheadline-regular" style={{ letterSpacing: '2px' }}>
        Kami berhasrat untuk meningkatkan kesedaran umum tentang kepentingan Hak Digital dan berusaha untuk membantu dalam mempromosikan penciptaan Universal Declaration of Digital Rights (UDDR) dengan kerjasama organisasi lain, baik daripada masyarakat sivil dan badan tadbir urus.
      </Typography>
    </section>
  )
}

