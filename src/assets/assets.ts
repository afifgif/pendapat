/**
 * Centralized Assets File
 * All images and icons from Figma design
 * 
 * Using public folder for better compatibility with Next.js 16
 */

// PNG images are in public folder - use public paths
const PUBLIC_IMAGES = '/images'
const PUBLIC_ICONS = '/icons'
const PUBLIC_LOGOS = '/logos'

/**
 * SVG Icons from public folder (better compatibility with Next.js 16)
 */
export const icons = {
  // Header Icons
  brandLogo: `${PUBLIC_LOGOS}/brand-logo.svg`,
  menu: `${PUBLIC_ICONS}/Menu.svg`,
  search: `${PUBLIC_ICONS}/Search.svg`,
  
  // Hero Section Icons
  ioFoundationFrame: `${PUBLIC_IMAGES}/Frame.png`,
  
  // Navigation/UI Icons
  arrowRight: `${PUBLIC_ICONS}/next.svg`, // Placeholder, can be replaced when arrow icon is available
  caretRight: `${PUBLIC_ICONS}/next.svg`, // Placeholder, can be replaced when arrow icon is available
  submit: `${PUBLIC_ICONS}/Submit-Icon.svg`,
  
  // Social Media Icons
  facebook: `${PUBLIC_ICONS}/facebook.svg`,
  instagram: `${PUBLIC_ICONS}/Social link-1.svg`, // Using Social link-1 as Instagram placeholder
  twitter: `${PUBLIC_ICONS}/x.svg`,
  github: `${PUBLIC_ICONS}/git.svg`,
  whatsapp: `${PUBLIC_ICONS}/Social link-1.svg`, // Using Social link-1 as WhatsApp placeholder
  telegram: `${PUBLIC_ICONS}/Social link-1.svg`, // Using Social link-1 as Telegram placeholder
  
  // Steps Section - Phone Mockup Icons (not available in local files, using placeholders)
  phoneEllipse: '',
  phoneShadow: '',
  phoneShadow1: '',
  phoneShadow2: '',
  phoneScreen: '',
  phoneScreen1: '',
  phoneScreen2: '',
  phoneBorder: '',
  phoneSoundCamera: '',
  phoneSoundCamera1: '',
  phoneSoundCamera2: '',
  phoneKeepIt: '',
  phoneKeepIt1: '',
  phoneSample: '',
  phoneSample2: '',
} as const

/**
 * Image Assets from local files
 */
export const images = {
  // Hero Section
  subjectImage: `${PUBLIC_IMAGES}/Hero%20Visual.png`,
  ellipse5: '', // Not available in local files
  intersect: '', // Not available in local files
  pinkCircle: `${PUBLIC_IMAGES}/Pink%20Circle.png`,
  
  // Features Section Icons
  featureIcon1: `${PUBLIC_ICONS}/Icon-community.svg`, // Interaksi bersama komuniti
  featureIcon2: `${PUBLIC_ICONS}/Icon-peka.svg`, // Sentiasa peka pada isu-isu semasa
  featureIcon3: `${PUBLIC_ICONS}/Icon-data.svg`, // Ketahui fakta melalui data dunia sebenar
  featureIcon4: `${PUBLIC_ICONS}/Icon-hand.svg`, // Perjuangkan hak digital anda
  
  // Steps Section - Phone Mockup Images
  phoneSample1: `${PUBLIC_IMAGES}/Phone-langkah1.png`, // Langkah 1
  phoneSample3: `${PUBLIC_IMAGES}/Phone-langkah2.png`, // Langkah 2
  phoneSample4: `${PUBLIC_IMAGES}/Phone-langkah3.png`, // Langkah 3
  
  // Articles Section
  articleImage1: `${PUBLIC_IMAGES}/article-image1.png`,
  articleImage2: `${PUBLIC_IMAGES}/article-image1.png`, // Using same image for now, can be updated when more images are available
  articleImage3: `${PUBLIC_IMAGES}/article-image1.png`, // Using same image for now, can be updated when more images are available
  decorativeLine: '',
} as const

/**
 * Export all assets as a single object for convenience
 */
export const assets = {
  icons,
  images,
} as const

/**
 * Type exports for TypeScript
 */
export type IconKey = keyof typeof icons
export type ImageKey = keyof typeof images

