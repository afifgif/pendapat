'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { images } from '@/assets/assets'

interface RelatedArticle {
  id: string
  title: string
  category: string
  date: string
  imageUrl?: string
}

function RelatedArticleCard({ title, category, imageUrl }: RelatedArticle) {
  return (
    <article style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      border: `1px solid ${colors.neutral[200]}`,
      borderRadius: '10px',
      padding: '16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backgroundColor: 'white'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none'
    }}
    >
      {/* Thumbnail */}
      <div style={{
        width: '100%',
        height: '300px',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: colors.neutral[100]
      }}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            crossOrigin="anonymous"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              if (target.parentElement) {
                target.parentElement.style.background = colors.neutral[200]
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.neutral[200],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="caption-regular" style={{ color: colors.neutral[400], fontSize: '12px' }}>
              Image
            </Typography>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px'
      }}>
        <Typography 
          variant="paragraph-small-regular"
          style={{ 
            color: colors.neutral[600],
            fontFamily: 'Euclid Circular A',
            fontSize: '16px',
            height: '17.04px',
            lineHeight: 'normal'
          }}
        >
          {category}
        </Typography>
        <Typography 
          variant="paragraph-01-regular"
          style={{
            color: colors.base.dark,
            fontFamily: 'Euclid Circular A',
            fontSize: '20px',
            fontWeight: 600,
            letterSpacing: '2px',
            lineHeight: 'normal'
          }}
        >
          {title}
        </Typography>
      </div>
    </article>
  )
}

export function RelatedArticles() {
  const relatedArticles: RelatedArticle[] = [
    {
      id: '1',
      title: 'Prestasi sukan negara makin \'ke laut\'?',
      category: 'Sukan',
      date: 'March, 29, 2022',
      imageUrl: images.articleImage1
    },
    {
      id: '2',
      title: '30 tahun kemarau pingat emas: siapakah yang harus dipersalahkan?',
      category: 'Sukan',
      date: 'March, 29, 2022',
      imageUrl: images.articleImage2
    },
    {
      id: '3',
      title: 'Krisis makanan: bersediakah Malaysia?',
      category: 'Isu Semasa',
      date: 'March, 29, 2022',
      imageUrl: images.articleImage3
    },
  ]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%'
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        width: '100%'
      }}>
        <Typography 
          variant="paragraph-01-bold"
          style={{ 
            color: colors.secondary[500],
            fontFamily: 'Euclid Circular A',
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0px',
            whiteSpace: 'nowrap'
          }}
        >
          Artikel berkaitan
        </Typography>
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '11px'
        }}>
          {/* Decorative line - using border as placeholder */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: colors.neutral[200],
            transform: 'rotate(180deg)'
          }} />
        </div>
      </div>
      
      {/* Article Grid */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {relatedArticles.map((article) => (
          <RelatedArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}

