'use client'

import { colors, typography } from '@/tokens'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral'
  size?: 'small' | 'medium' | 'large'
  state?: 'default' | 'hover' | 'active' | 'outline'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', state = 'default', children, ...props }, ref) => {
    // Size-based styles
    const sizeStyles = {
      small: {
        padding: '8px 16px',
        minHeight: '32px',
      },
      medium: {
        padding: '12px 24px',
        minHeight: '40px',
      },
      large: {
        padding: '16px 32px',
        minHeight: '48px',
      },
    }

    // Variant and state-based colors
    const getVariantStyles = () => {
      const getColor = (shade: number) => {
        if (variant === 'neutral') {
          // Neutral uses 500 for default, 400 for hover, 300 for active
          return colors.neutral[shade as keyof typeof colors.neutral] || colors.neutral[500]
        }
        const variantColors = colors[variant as 'primary' | 'secondary']
        return variantColors[shade as keyof typeof variantColors]
      }

      if (state === 'outline') {
        const borderColor = variant === 'neutral' ? colors.neutral[500] : getColor(500)
        return {
          backgroundColor: 'transparent',
          border: `2px solid ${borderColor}`,
          color: borderColor,
        }
      }

      if (state === 'hover') {
        const bgColor = variant === 'neutral' ? colors.neutral[400] : getColor(400)
        return {
          backgroundColor: bgColor,
          border: 'none',
          color: variant === 'neutral' ? colors.base.black : colors.base.white,
        }
      }

      if (state === 'active') {
        const bgColor = variant === 'neutral' ? colors.neutral[300] : getColor(300)
        return {
          backgroundColor: bgColor,
          border: 'none',
          color: variant === 'neutral' ? colors.base.black : colors.base.white,
        }
      }

      // Default state
      const bgColor = variant === 'neutral' ? colors.neutral[500] : getColor(500)
      return {
        backgroundColor: bgColor,
        border: 'none',
        color: variant === 'neutral' ? colors.base.black : colors.base.white,
      }
    }

    const baseStyles: React.CSSProperties = {
      fontFamily: typography.button.fontFamily,
      fontSize: typography.button.fontSize,
      fontWeight: typography.button.fontWeight,
      lineHeight: typography.button.lineHeight,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sizeStyles[size],
      ...getVariantStyles(),
    }

    return (
      <button
        ref={ref}
        style={baseStyles}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

