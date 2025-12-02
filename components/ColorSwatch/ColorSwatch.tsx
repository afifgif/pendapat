'use client'

import { colors } from '@/tokens'

export const ColorSwatch = () => {
  const colorGroups = [
    { name: 'Primary', colors: colors.primary },
    { name: 'Secondary', colors: colors.secondary },
    { name: 'Success', colors: colors.success },
    { name: 'Warning', colors: colors.warning },
    { name: 'Error', colors: colors.error },
    { name: 'Neutral', colors: colors.neutral },
    { name: 'Base', colors: colors.base },
  ]

  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      {colorGroups.map((group) => (
        <div key={group.name}>
          <h3 style={{ marginBottom: '1rem' }}>{group.name}</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {Object.entries(group.colors).map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: value,
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                  }}
                />
                <div style={{ fontSize: '12px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold' }}>{key}</div>
                  <div style={{ color: '#666', fontFamily: 'monospace' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}



