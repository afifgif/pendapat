'use client'

import { useState } from 'react'
import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

interface PollOption {
  text: string
  percentage: number
}

interface InlinePollWidgetProps {
  question: string
  relatedQuestion?: string
  options: PollOption[]
  voteCount: number
  initialVariant?: 'variant2' | 'default'
}

export function InlinePollWidget({
  question,
  relatedQuestion,
  options,
  voteCount,
  initialVariant = 'variant2',
}: InlinePollWidgetProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  // variant2 = before selection (border-only, white text, no percentages)
  // default = after selection (filled bars, black text, with percentages)
  const [hasVoted, setHasVoted] = useState(initialVariant === 'default')
  
  const isVariant2 = !hasVoted // Before selection: variant2
  const isDefault = hasVoted // After selection: default
  const optionTextColor = isVariant2 ? 'white' : colors.base.dark
  const showPercentages = isDefault // Only show percentages after selection
  const canUndo = hasVoted && selectedOption !== null

  const handleOptionClick = (index: number) => {
    if (!hasVoted) {
      setSelectedOption(index)
      setHasVoted(true) // Switch to default variant (filled bars)
    }
  }

  const handleUndo = () => {
    setSelectedOption(null)
    setHasVoted(false) // Switch back to variant2 (border-only)
  }

  return (
    <div
      style={{
        backgroundColor: colors.primary[300],
        borderRadius: '12px',
        padding: '48px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        width: '100%',
        maxWidth: '813px',
      }}
    >
      {/* Left Column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          flexShrink: 0,
          minHeight: '240px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Typography
            variant="caption-regular"
            style={{
              color: 'white',
              fontFamily: 'Euclid Circular A',
              fontSize: '14px',
              textDecoration: 'underline',
            }}
          >
            Related Question
          </Typography>
          <Typography
            variant="heading-h2-bold"
            style={{
              color: 'white',
              fontFamily: 'Euclid Circular A',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.64px',
              lineHeight: 'normal',
              width: '331.659px',
            }}
          >
            {question}
          </Typography>
          {relatedQuestion && (
            <Typography
              variant="caption-regular"
              style={{
                color: 'white',
                fontFamily: 'Euclid Circular A',
                fontSize: '14px',
                lineHeight: '28px',
              }}
            >
              {relatedQuestion}
            </Typography>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="caption-regular"
              style={{
                color: 'white',
                fontFamily: 'Euclid Circular A',
                fontSize: '14px',
              }}
            >
              {voteCount} Undian
            </Typography>
            {canUndo && (
              <button
                onClick={handleUndo}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label="Undo vote"
              >
                <Typography
                  variant="caption-bold"
                  style={{
                    color: colors.secondary[100],
                    fontFamily: 'Euclid Circular A',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
                >
                  Undo
                </Typography>
              </button>
            )}
          </div>

          <div
            style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(322deg)',
            }}
          >
            <img
              src={icons.submit}
              alt="Submit poll"
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'contain',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'flex-start',
          flexShrink: 0,
        }}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasVoted}
            style={{
              position: 'relative',
              height: '42px',
              width: '328.142px',
              borderRadius: '10px',
              cursor: hasVoted ? 'default' : 'pointer',
              overflow: 'hidden',
              border: isVariant2 ? `1px solid ${colors.neutral[100]}` : 'none',
              padding: 0,
              background: 'transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!hasVoted) {
                e.currentTarget.style.opacity = '0.9'
              }
            }}
            onMouseLeave={(e) => {
              if (!hasVoted) {
                e.currentTarget.style.opacity = '1'
              }
            }}
          >
            {/* Variant2: Border only, no fill */}
            {isVariant2 && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: `1px solid ${colors.neutral[100]}`,
                  borderRadius: '10px',
                }}
              />
            )}
            
            {/* Default: Filled progress bars */}
            {isDefault && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: colors.primary[200],
                    borderRadius: '10px',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${option.percentage}%`,
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    transition: 'width 0.3s ease',
                  }}
                />
              </>
            )}

            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 15.68px',
                zIndex: 1,
              }}
            >
              <Typography
                variant="caption-regular"
                style={{
                  color: optionTextColor,
                  fontFamily: 'Euclid Circular A',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '20px',
                }}
              >
                {option.text}
              </Typography>
              {showPercentages && (
                <Typography
                  variant="caption-regular"
                  style={{
                    color: optionTextColor,
                    fontFamily: 'Euclid Circular A',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    width: '30.16px',
                    textAlign: 'right',
                  }}
                >
                  {option.percentage}%
                </Typography>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
