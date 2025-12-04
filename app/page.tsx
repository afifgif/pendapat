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
    <div className='bg-white flex flex-col items-center justify-center p-0 56px gap-56px min-h-screen w-full'>
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
