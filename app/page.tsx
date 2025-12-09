import {
  Header,
  HeroSection,
  AboutSection,
  FeaturesSection,
  StepsSection,
  ArticlesSection,
  CallToActionBanner,
  Footer,
} from './components/landing'

export default function LandingPage() {
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
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StepsSection />
      <ArticlesSection />
      <CallToActionBanner />
      <Footer />
    </div>
  )
}
