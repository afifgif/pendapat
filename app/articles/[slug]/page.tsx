import {
  Header,
  Footer,
} from '../../components/landing'
import {
  TopicNavigation,
  Breadcrumb,
  ArticleContentHeader,
  ArticleHeroImage,
  ArticleBody,
  InlinePollWidget,
  HorizontalArticleCard,
  RelatedArticles,
} from './components'

interface ArticleContentPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticleContentPage(props: ArticleContentPageProps) {
  const params = await props.params;
  // In a real app, fetch article data based on slug
  // For now, using sample data matching the Figma design
  const article = {
    slug: params.slug,
    title: 'Kewujudan \'Percaturan dan permainan\' dalam harga ayam punca bekalan ayam putus?',
    category: 'Isu Semasa',
    date: '01 Dec 2021, 03:49 PM',
    author: 'Bernama',
    imageUrl: '/images/article-image1.png',
    content: `
      <p>Krisis bekalan ayam menjadi buah mulut rakyat Malaysia sejak beberapa bulan ini. Mana tidaknya, bekalan ayam yang tidak mencukupi atau ketiadaan bekalan makanan tersebut menggusarkan rakyat; bukan sahaja orang ramai malahan mereka yang terlibat dengan perniagaan makanan yang berasaskan ayam. Krisis bekalan ayam menjadi buah mulut rakyat Malaysia sejak beberapa bulan ini. Mana tidaknya, bekalan ayam yang tidak mencukupi atau ketiadaan bekalan makanan tersebut menggusarkan rakyat; bukan sahaja orang ramai malahan mereka yang terlibat dengan perniagaan makanan yang berasaskan ayam.</p>
    `,
    content2: `
      <p>Kementerian Pertanian dan Industri Makanan (MAFI) meminta agar tiada 'percaturan dan permainan' harga diteruskan menerusi pengurangan bekalan ayam di pasaran dengan pelbagai alasan yang jelas membebankan rakyat.</p>
      <p>"Bila dikatakan berlaku bekalan ayam tidak mencukupi, ini bermaksud ada benda-benda tak betul yang wujud.. Tidak dinafikan memang ada penyakit ayam dan beratnya tidak sesuai untuk dijual, namun situasi itu sentiasa berlaku sepangjang masa," menurut Timbalan Menteri Pertanian dan Industri Makanan II Datuk Dr Nik Muhammad Zawawi Salleh.</p>
    `,
    content3: `
      <p>Krisis bekalan ayam menjadi buah mulut rakyat Malaysia sejak beberapa bulan ini. Mana tidaknya, bekalan ayam yang tidak mencukupi atau ketiadaan bekalan makanan tersebut menggusarkan rakyat; bukan sahaja orang ramai malahan mereka yang terlibat dengan perniagaan makanan yang berasaskan ayam.</p>
    `
  }

  const pollOptions = [
    { text: 'Bekalan kurang, harga mahal', percentage: 80 },
    { text: 'Bekalan kurang, harga munasabah', percentage: 50 },
    { text: 'Bekalan mencukupi, harga mahal', percentage: 70 },
    { text: 'Bekalan mencukupi dengan harga munasabah', percentage: 20 },
  ]

  const pollOptions2 = [
    { text: 'Bekalan kurang, harga mahal', percentage: 80 },
    { text: 'Bekalan kurang, harga munasabah', percentage: 50 },
    { text: 'Bekalan mencukupi, harga mahal', percentage: 70 },
    { text: 'Bekalan mencukupi dengan harga munasabah', percentage: 20 },
  ]

  return (
    <div style={{ 
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 100px 56px',
      gap: '56px',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Header with Topic Navigation */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%'
      }}>
        <Header />
        <TopicNavigation />
      </div>

      {/* Main Content Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%'
      }}>
        {/* Breadcrumb */}
        <Breadcrumb category={article.category} />

        {/* Article Content */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          width: '100%'
        }}>
          {/* Left Column - Main Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: '813px',
            maxWidth: '813px',
            flexShrink: 0
          }}>
            {/* Article Header */}
            <ArticleContentHeader 
              title={article.title}
              date={article.date}
              author={article.author}
            />

            {/* Featured Image and Metadata */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <ArticleHeroImage imageUrl={article.imageUrl} alt={article.title} />
            </div>

            {/* First Article Body */}
            <ArticleBody content={article.content} />

            {/* First Inline Poll */}
            <InlinePollWidget
              question="Bagaimana keadaan bekalan ayam di sekitar anda?"
              relatedQuestion="Related Question"
              options={pollOptions}
              voteCount={4234}
            />

            {/* Horizontal Article Card with Content */}
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
              width: '100%'
            }}>
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <ArticleBody content={article.content2} />
              </div>
              <HorizontalArticleCard
                imageUrl="/images/article-image1.png"
                title="Hentikan 'percaturan dan permainan' harga ayam - MAFI"
                author="Bernama"
              />
            </div>

            {/* Second Inline Poll */}
            <InlinePollWidget
              question="Bagaimana keadaan bekalan ayam di sekitar anda?"
              relatedQuestion="Related Question"
              options={pollOptions}
              voteCount={4234}
            />

            {/* Final Article Body */}
            <ArticleBody content={article.content3} />
          </div>

          {/* Right Column - Sidebar */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            minWidth: 0
          }}>
            <RelatedArticles />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
