'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { icons } from '@/assets/assets'

export function ArticleNavigation() {
  // In a real app, these would come from actual article data
  const prevArticle = {
    title: 'Prestasi sukan negara makin \'ke laut\'?',
    slug: 'prestasi-sukan-negara'
  }

  const nextArticle = {
    title: '30 tahun kemarau juara Piala Thomas',
    slug: '30-tahun-kemarau-juara-piala-thomas'
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '24px',
      padding: '32px 0',
      borderTop: `1px solid ${colors.neutral[200]}`
    }}>
      {/* Previous Article */}
      {prevArticle && (
        <a
          href={`/articles/${prevArticle.slug}`}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '20px',
            borderRadius: '10px',
            border: `1px solid ${colors.neutral[200]}`,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.secondary[500]
            e.currentTarget.style.backgroundColor = colors.secondary[100]
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.neutral[200]
            e.currentTarget.style.backgroundColor = 'white'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <img 
              src={icons.arrowRight} 
              alt="Previous"
              style={{
                width: '16px',
                height: '16px',
                transform: 'rotate(180deg)',
                objectFit: 'contain'
              }}
            />
            <Typography 
              variant="caption-regular"
              style={{
                color: colors.neutral[500],
                fontFamily: 'Euclid Circular A',
                fontSize: '12px'
              }}
            >
              Artikel Sebelumnya
            </Typography>
          </div>
          <Typography 
            variant="paragraph-02-regular"
            style={{
              color: colors.base.dark,
              fontFamily: 'Euclid Circular A',
              fontSize: '14px',
              lineHeight: '1.4'
            }}
          >
            {prevArticle.title}
          </Typography>
        </a>
      )}

      {/* Next Article */}
      {nextArticle && (
        <a
          href={`/articles/${nextArticle.slug}`}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '20px',
            borderRadius: '10px',
            border: `1px solid ${colors.neutral[200]}`,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: 'white',
            alignItems: 'flex-end',
            textAlign: 'right'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.secondary[500]
            e.currentTarget.style.backgroundColor = colors.secondary[100]
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.neutral[200]
            e.currentTarget.style.backgroundColor = 'white'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Typography 
              variant="caption-regular"
              style={{
                color: colors.neutral[500],
                fontFamily: 'Euclid Circular A',
                fontSize: '12px'
              }}
            >
              Artikel Seterusnya
            </Typography>
            <img 
              src={icons.arrowRight} 
              alt="Next"
              style={{
                width: '16px',
                height: '16px',
                objectFit: 'contain'
              }}
            />
          </div>
          <Typography 
            variant="paragraph-02-regular"
            style={{
              color: colors.base.dark,
              fontFamily: 'Euclid Circular A',
              fontSize: '14px',
              lineHeight: '1.4'
            }}
          >
            {nextArticle.title}
          </Typography>
        </a>
      )}
    </div>
  )
}


