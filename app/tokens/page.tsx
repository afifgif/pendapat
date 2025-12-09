'use client'

import { colors, typography } from '@/tokens'
import { Typography } from '@/components/Typography'

export default function TokensPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="headline-01-bold" style={{ marginBottom: '2rem' }}>
        Design Tokens
      </Typography>



      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="headline-02-semibold" style={{ marginBottom: '1rem' }}>
          Color Tokens
        </Typography>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Primary Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Primary
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.primary).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>primary.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Secondary
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.secondary).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>secondary.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Success
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.success).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>success.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Warning
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.warning).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>warning.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Error
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.error).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>error.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Neutral
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.neutral).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>neutral.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Base Colors */}
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '1rem' }}>
              Base
            </Typography>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(colors.base).map(([key, value]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: value,
                      borderRadius: '8px',
                      border: key === 'white' ? '1px solid #e0e0e0' : 'none',
                    }}
                  />
                  <div style={{ fontSize: '12px' }}>
                    <div style={{ fontWeight: 'bold' }}>base.{key}</div>
                    <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <Typography variant="headline-02-semibold" style={{ marginBottom: '1rem' }}>
          Typography Tokens
        </Typography>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '0.5rem' }}>
              Font Families
            </Typography>
            <div style={{ fontFamily: 'monospace', fontSize: '14px', color: '#666' }}>
              <div>Primary: {typography.fontFamily.primary}</div>
              <div>Display: {typography.fontFamily.display}</div>
            </div>
          </div>

          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '0.5rem' }}>
              Display Styles
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <Typography variant="display-01-bold">Display 01 Bold</Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#666', marginTop: '0.5rem' }}>
                  {typography.display['01'].bold.fontSize} / {typography.display['01'].bold.fontWeight} / {typography.display['01'].bold.lineHeight}
                </div>
              </div>
              <div>
                <Typography variant="display-02-semibold">Display 02 SemiBold</Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#666', marginTop: '0.5rem' }}>
                  {typography.display['02'].semibold.fontSize} / {typography.display['02'].semibold.fontWeight} / {typography.display['02'].semibold.lineHeight}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '0.5rem' }}>
              Headline Styles
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <Typography variant="headline-01-bold">Headline 01 Bold</Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', marginTop: '0.25rem' }}>
                  {typography.headline['01'].bold.fontSize} / {typography.headline['01'].bold.fontWeight}
                </div>
              </div>
              <div>
                <Typography variant="headline-02-semibold">Headline 02 SemiBold</Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', marginTop: '0.25rem' }}>
                  {typography.headline['02'].semibold.fontSize} / {typography.headline['02'].semibold.fontWeight}
                </div>
              </div>
              <div>
                <Typography variant="headline-03-medium">Headline 03 Medium</Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', marginTop: '0.25rem' }}>
                  {typography.headline['03'].medium.fontSize} / {typography.headline['03'].medium.fontWeight}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="headline-03-medium" style={{ marginBottom: '0.5rem' }}>
              Paragraph Styles
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <Typography variant="paragraph-01-regular">
                  Paragraph 01 Regular - Sample text to demonstrate the typography style.
                </Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', marginTop: '0.25rem' }}>
                  {typography.paragraph['01'].regular.fontSize} / {typography.paragraph['01'].regular.fontWeight}
                </div>
              </div>
              <div>
                <Typography variant="paragraph-02-regular">
                  Paragraph 02 Regular - Smaller paragraph text.
                </Typography>
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', marginTop: '0.25rem' }}>
                  {typography.paragraph['02'].regular.fontSize} / {typography.paragraph['02'].regular.fontWeight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



