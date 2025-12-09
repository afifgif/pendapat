'use client'

import { typography } from '@/tokens'
import { HTMLAttributes, forwardRef, type JSX } from 'react';

type TypographyVariant =
  | 'display-01-semibold'
  | 'display-01-bold'
  | 'display-01-medium'
  | 'display-02-semibold'
  | 'display-02-bold'
  | 'display-02-medium'
  | 'heading-h1-semibold'
  | 'heading-h1-bold'
  | 'heading-h1-regular'
  | 'heading-h2-semibold'
  | 'heading-h2-bold'
  | 'heading-h2-regular'
  | 'heading-h4-semibold'
  | 'heading-h4-bold'
  | 'heading-h4-regular'
  | 'headline-01-semibold'
  | 'headline-01-bold'
  | 'headline-01-medium'
  | 'headline-01-small-semibold'
  | 'headline-01-small-bold'
  | 'headline-01-small-medium'
  | 'headline-02-semibold'
  | 'headline-02-bold'
  | 'headline-02-medium'
  | 'headline-02-small-semibold'
  | 'headline-02-small-bold'
  | 'headline-02-small-medium'
  | 'headline-03-semibold'
  | 'headline-03-bold'
  | 'headline-03-medium'
  | 'headline-03-small-semibold'
  | 'headline-03-small-bold'
  | 'headline-03-small-medium'
  | 'headline-04-semibold'
  | 'headline-04-bold'
  | 'headline-04-medium'
  | 'headline-04-small-semibold'
  | 'headline-04-small-bold'
  | 'headline-04-small-medium'
  | 'headline-05-semibold'
  | 'headline-05-bold'
  | 'headline-05-medium'
  | 'headline-05-small-semibold'
  | 'headline-05-small-bold'
  | 'headline-05-small-medium'
  | 'subheadline-regular'
  | 'subheadline-bold'
  | 'subheadline-underline'
  | 'paragraph-01-regular'
  | 'paragraph-01-bold'
  | 'paragraph-01-underline'
  | 'paragraph-02-regular'
  | 'paragraph-02-bold'
  | 'paragraph-02-underline'
  | 'paragraph-03-regular'
  | 'paragraph-03-bold'
  | 'paragraph-03-underline'
  | 'paragraph-small-regular'
  | 'paragraph-small-bold'
  | 'caption-regular'
  | 'caption-bold'
  | 'caption-bold-allcaps'
  | 'footer-regular'
  | 'footer-bold'
  | 'footer-bold-allcaps'
  | 'button'
  | 'text'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

const getTypographyStyle = (variant: TypographyVariant) => {
  const variantMap: Record<string, any> = {
    'display-01-semibold': typography.display['01'].semibold,
    'display-01-bold': typography.display['01'].bold,
    'display-01-medium': typography.display['01'].medium,
    'display-02-semibold': typography.display['02'].semibold,
    'display-02-bold': typography.display['02'].bold,
    'display-02-medium': typography.display['02'].medium,
    'heading-h1-semibold': typography.heading.h1.semibold,
    'heading-h1-bold': typography.heading.h1.bold,
    'heading-h1-regular': typography.heading.h1.regular,
    'heading-h2-semibold': typography.heading.h2.semibold,
    'heading-h2-bold': typography.heading.h2.bold,
    'heading-h2-regular': typography.heading.h2.regular,
    'heading-h4-semibold': typography.heading.h4.semibold,
    'heading-h4-bold': typography.heading.h4.bold,
    'heading-h4-regular': typography.heading.h4.regular,
    'headline-01-semibold': typography.headline['01'].semibold,
    'headline-01-bold': typography.headline['01'].bold,
    'headline-01-medium': typography.headline['01'].medium,
    'headline-01-small-semibold': typography.headline['01'].small.semibold,
    'headline-01-small-bold': typography.headline['01'].small.bold,
    'headline-01-small-medium': typography.headline['01'].small.medium,
    'headline-02-semibold': typography.headline['02'].semibold,
    'headline-02-bold': typography.headline['02'].bold,
    'headline-02-medium': typography.headline['02'].medium,
    'headline-02-small-semibold': typography.headline['02'].small.semibold,
    'headline-02-small-bold': typography.headline['02'].small.bold,
    'headline-02-small-medium': typography.headline['02'].small.medium,
    'headline-03-semibold': typography.headline['03'].semibold,
    'headline-03-bold': typography.headline['03'].bold,
    'headline-03-medium': typography.headline['03'].medium,
    'headline-03-small-semibold': typography.headline['03'].small.semibold,
    'headline-03-small-bold': typography.headline['03'].small.bold,
    'headline-03-small-medium': typography.headline['03'].small.medium,
    'headline-04-semibold': typography.headline['04'].semibold,
    'headline-04-bold': typography.headline['04'].bold,
    'headline-04-medium': typography.headline['04'].medium,
    'headline-04-small-semibold': typography.headline['04'].small.semibold,
    'headline-04-small-bold': typography.headline['04'].small.bold,
    'headline-04-small-medium': typography.headline['04'].small.medium,
    'headline-05-semibold': typography.headline['05'].semibold,
    'headline-05-bold': typography.headline['05'].bold,
    'headline-05-medium': typography.headline['05'].medium,
    'headline-05-small-semibold': typography.headline['05'].small.semibold,
    'headline-05-small-bold': typography.headline['05'].small.bold,
    'headline-05-small-medium': typography.headline['05'].small.medium,
    'subheadline-regular': typography.subheadline.regular,
    'subheadline-bold': typography.subheadline.bold,
    'subheadline-underline': typography.subheadline.underline,
    'paragraph-01-regular': typography.paragraph['01'].regular,
    'paragraph-01-bold': typography.paragraph['01'].bold,
    'paragraph-01-underline': typography.paragraph['01'].underline,
    'paragraph-02-regular': typography.paragraph['02'].regular,
    'paragraph-02-bold': typography.paragraph['02'].bold,
    'paragraph-02-underline': typography.paragraph['02'].underline,
    'paragraph-03-regular': typography.paragraph['03'].regular,
    'paragraph-03-bold': typography.paragraph['03'].bold,
    'paragraph-03-underline': typography.paragraph['03'].underline,
    'paragraph-small-regular': typography.paragraph.small.regular,
    'paragraph-small-bold': typography.paragraph.small.bold,
    'caption-regular': typography.caption.regular,
    'caption-bold': typography.caption.bold,
    'caption-bold-allcaps': typography.caption.boldAllCaps,
    'footer-regular': typography.footer.regular,
    'footer-bold': typography.footer.bold,
    'footer-bold-allcaps': typography.footer.boldAllCaps,
    'button': typography.button,
    'text': typography.text,
  }

  return variantMap[variant] || typography.paragraph['01'].regular
}

const getDefaultTag = (variant: TypographyVariant): keyof JSX.IntrinsicElements => {
  if (variant.startsWith('heading-h1')) return 'h1'
  if (variant.startsWith('heading-h2')) return 'h2'
  if (variant.startsWith('heading-h4')) return 'h4'
  if (variant.startsWith('display')) return 'h1'
  if (variant.startsWith('headline')) return 'h2'
  if (variant.startsWith('subheadline')) return 'h3'
  if (variant.startsWith('paragraph')) return 'p'
  if (variant.startsWith('caption')) return 'span'
  if (variant.startsWith('footer')) return 'p'
  return 'span'
}

export const Typography = forwardRef<any, TypographyProps>(
  ({ variant, as, children, style, ...props }, ref) => {
    const typographyStyle = getTypographyStyle(variant)
    const Tag = (as || getDefaultTag(variant)) as any

    const combinedStyle: React.CSSProperties = {
      fontFamily: typographyStyle.fontFamily,
      fontSize: typographyStyle.fontSize,
      fontWeight: typographyStyle.fontWeight,
      lineHeight: typographyStyle.lineHeight,
      textDecoration: typographyStyle.textDecoration,
      textTransform: typographyStyle.textTransform,
      ...style,
    }

    return (
      <Tag ref={ref} style={combinedStyle} {...props}>
        {children}
      </Tag>
    )
  }
)

Typography.displayName = 'Typography'


