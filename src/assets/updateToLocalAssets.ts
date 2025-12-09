/**
 * Script to update assets.ts to use local files
 * Run this after exporting assets from Figma to public/images/
 * 
 * Usage: This is a reference file showing how to update assets.ts
 */

// After exporting assets from Figma, update src/assets/assets.ts:

export const LOCAL_ASSETS_CONFIG = {
  // Change this to true to use local files instead of Figma MCP server
  useLocalFiles: false,
  
  // Local file paths (update these after exporting from Figma)
  localBaseUrl: '/images',
  
  // Icon paths
  icons: {
    brandLogo: '/images/icons/brand-logo.svg',
    menu: '/images/icons/menu.svg',
    search: '/images/icons/search.svg',
    arrowRight: '/images/icons/arrow-right.svg',
    facebook: '/images/icons/facebook.svg',
    instagram: '/images/icons/instagram.svg',
    twitter: '/images/icons/twitter.svg',
    whatsapp: '/images/icons/whatsapp.svg',
    telegram: '/images/icons/telegram.svg',
    ioFoundationFrame: '/images/icons/io-foundation-frame.svg',
  },
  
  // Image paths
  images: {
    subjectImage: '/images/hero-subject.png',
    ellipse5: '/images/ellipse-5.svg',
    intersect: '/images/intersect.png',
    pinkCircle: '/images/pink-circle.png',
    featureIcon1: '/images/features/icon-1.png',
    featureIcon2: '/images/features/icon-2.png',
    featureIcon3: '/images/features/icon-3.png',
    featureIcon4: '/images/features/icon-4.png',
    articleImage1: '/images/articles/article-1.png',
    articleImage2: '/images/articles/article-2.png',
    articleImage3: '/images/articles/article-3.png',
    decorativeLine: '/images/decorative-line.png',
  }
}






