'use client'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { ColorSwatch } from '@/components/ColorSwatch'

export default function ComponentsPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Component Playground</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="large">Primary Large</Button>
          <Button variant="primary" size="medium">Primary Medium</Button>
          <Button variant="primary" size="small">Primary Small</Button>
          
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="secondary" size="large">Secondary Large</Button>
          <Button variant="secondary" size="medium">Secondary Medium</Button>
          <Button variant="secondary" size="small">Secondary Small</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="neutral" size="large">Neutral Large</Button>
          <Button variant="neutral" size="medium">Neutral Medium</Button>
          <Button variant="neutral" size="small">Neutral Small</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="large" state="hover">Hover State</Button>
          <Button variant="primary" size="large" state="active">Active State</Button>
          <Button variant="primary" size="large" state="outline">Outline</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Typography</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="display-01-bold">Display 01 Bold</Typography>
          <Typography variant="display-02-semibold">Display 02 SemiBold</Typography>
          <Typography variant="headline-01-bold">Headline 01 Bold</Typography>
          <Typography variant="headline-02-semibold">Headline 02 SemiBold</Typography>
          <Typography variant="headline-03-medium">Headline 03 Medium</Typography>
          <Typography variant="subheadline-regular">Subheadline Regular</Typography>
          <Typography variant="paragraph-01-regular">
            Paragraph 01 Regular - This is a sample paragraph text to demonstrate the typography style.
          </Typography>
          <Typography variant="paragraph-02-regular">
            Paragraph 02 Regular - Smaller paragraph text for secondary content.
          </Typography>
          <Typography variant="caption-regular">Caption Regular</Typography>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Colors</h2>
        <ColorSwatch />
      </section>
    </div>
  )
}


