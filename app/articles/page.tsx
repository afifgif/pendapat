import {
  Header,
  Footer,
} from '../components/landing'
import {
  ArticleHeader,
  ArticleFilters,
  ArticleList,
  ArticlePagination,
} from './components'

export default function ArticlesPage() {
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
      <Header />
      <ArticleHeader />
      <ArticleFilters />
      <ArticleList />
      <ArticlePagination />
      <Footer />
    </div>
  )
}


