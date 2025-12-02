/**
 * Centralized Assets File
 * All images and icons from Figma design
 * 
 * Using local files from src/assets directory
 */

// Import SVG assets (these work with webpack)
import brandLogo from './logo/brand-logo.svg'
import menuIcon from './icon/Menu.svg'
import nextIcon from './icon/next.svg'
import searchIcon from './icon/Search.svg'
import submitIcon from './icon/Submit-Icon.svg'
import iconCommunity from './icon/Icon-community.svg'
import iconPeka from './icon/Icon-peka.svg'
import iconData from './icon/Icon-data.svg'
import iconHand from './icon/Icon-hand.svg'
import facebookIcon from './social/facebook.svg'
import twitterIcon from './social/x.svg'
import socialLink1 from './social/Social link-1.svg'

// PNG images are in public folder - use public paths
const PUBLIC_IMAGES = '/images'

/**
 * SVG Icons from local files
 */
export const icons = {
  // Header Icons
  brandLogo: brandLogo,
  menu: menuIcon,
  search: searchIcon, // Using menu icon as placeholder, can be replaced when search icon is available
  
  // Hero Section Icons
  ioFoundationFrame: `${PUBLIC_IMAGES}/Frame.png`,
  
  // Navigation/UI Icons
  arrowRight: nextIcon, // Placeholder, can be replaced when arrow icon is available
  caretRight: nextIcon, // Placeholder, can be replaced when arrow icon is available
  submit: submitIcon,
  
  // Social Media Icons
  facebook: facebookIcon,
  instagram: socialLink1, // Using Social link-1 as Instagram placeholder
  twitter: twitterIcon,
  whatsapp: socialLink1, // Using Social link-1 as WhatsApp placeholder
  telegram: socialLink1, // Using Social link-1 as Telegram placeholder
  
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
  featureIcon1: iconCommunity, // Interaksi bersama komuniti
  featureIcon2: iconPeka, // Sentiasa peka pada isu-isu semasa
  featureIcon3: iconData, // Ketahui fakta melalui data dunia sebenar
  featureIcon4: iconHand, // Perjuangkan hak digital anda
  
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

