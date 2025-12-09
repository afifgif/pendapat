'use client'

import { Typography } from '@/components/Typography'
import { colors } from '@/tokens'
import { images } from '@/assets/assets'

interface Article {
  id: string
  category: string
  date: string
  title: string
  description: string
  imageUrl?: string
}

function ArticleCard({ id, category, date, title, description, imageUrl }: Article) {
  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return (
    <a
      href={`/articles/${slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        border: `1px solid ${colors.neutral[200]}`,
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Thumbnail Image */}
      <div style={{
        width: '100%',
        height: '240px',
        position: 'relative',
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
            <Typography variant="caption-regular" style={{ color: colors.neutral[400] }}>
              Article Image
            </Typography>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '20px',
        flex: 1
      }}>
        {/* Category and Date */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Typography 
            variant="paragraph-small-bold" 
            style={{ 
              color: colors.neutral[600],
              letterSpacing: '2px'
            }}
          >
            {category}
          </Typography>
          <Typography 
            variant="caption-regular" 
            style={{ color: colors.neutral[500] }}
          >
            {date}
          </Typography>
        </div>
        
        {/* Title */}
        <Typography 
          variant="subheadline-bold"
          style={{
            color: colors.base.dark,
            lineHeight: '1.4'
          }}
        >
          {title}
        </Typography>
        
        {/* Description */}
        <Typography 
          variant="paragraph-02-regular" 
          style={{ 
            color: colors.neutral[500],
            lineHeight: '1.6'
          }}
        >
          {description}
        </Typography>
      </div>
    </a>
  )
}

export function ArticleList() {
  // Sample articles data - in a real app, this would come from an API
  const articles: Article[] = [
    {
      id: '1',
      category: 'Sukan',
      date: 'March, 29, 2022',
      title: 'Prestasi sukan negara makin \'ke laut\'?',
      description: 'Sukan SEA baru saja melabuhkan tirai di Vietnam untuk edisi kali ini dengan Vietnam selaku tuan rumah, muncul juara temasya dwitahunan ini seperti dijangka...',
      imageUrl: images.articleImage1
    },
    {
      id: '2',
      category: 'Sukan',
      date: 'March, 29, 2022',
      title: '30 tahun kemarau juara Piala Thomas, Malaysia bakal jadi pasukan \'lauk\'?',
      description: 'Ibarat terus dihimpit kegagalan skuad badminton negara terus kempunan setelah tersingkir dalam persaingan Piala Thomas 2022 setelah tewas kepada India...',
      imageUrl: images.articleImage2
    },
    {
      id: '3',
      category: 'Isu Semasa',
      date: 'March, 29, 2022',
      title: 'Adakah KPDNHEP sedang buat tindakan betul untuk jaga kebajikan rakyat?',
      description: 'Inflasi makanan Malaysia dijangka kekal dalam aliran meningkat pada bulan-bulan akan datang berikutan kenaikan harga komoditi global,...',
      imageUrl: images.articleImage3
    },
    {
      id: '4',
      category: 'Isu Semasa',
      date: 'March, 28, 2022',
      title: 'Kebocoran Data Peribadi di Malaysia',
      description: 'Mengapa ia terjadi? Kajian mendalam tentang keselamatan data dan privasi digital di Malaysia...',
      imageUrl: images.articleImage1
    },
    {
      id: '5',
      category: 'Politik',
      date: 'March, 27, 2022',
      title: 'Reformasi sistem pendidikan: Adakah kita di landasan yang betul?',
      description: 'Analisis mendalam tentang transformasi sistem pendidikan negara dan cabaran yang dihadapi...',
      imageUrl: images.articleImage2
    },
    {
      id: '6',
      category: 'Ekonomi',
      date: 'March, 26, 2022',
      title: 'Dampak inflasi terhadap ekonomi rakyat',
      description: 'Bagaimana kenaikan harga barang mempengaruhi kehidupan seharian rakyat Malaysia...',
      imageUrl: images.articleImage3
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '24px',
      width: '100%',
      padding: '0 100px'
    }}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          {...article}
        />
      ))}
    </div>
  )
}

