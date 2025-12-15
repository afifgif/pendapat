# Assets Directory

This directory contains all image and icon assets for the application.

## Structure

```
src/assets/
├── assets.ts    # Centralized assets file (icons + images)
├── index.ts     # Re-exports for convenient importing
└── README.md    # This file
```

## Usage

### Import Icons
```typescript
import { icons } from '@/assets/assets'
// or
import { icons } from '@/assets'

// Usage
<img src={icons.brandLogo} alt="Logo" />
```

### Import Images
```typescript
import { images } from '@/assets/assets'
// or
import { images } from '@/assets'

// Usage
<img src={images.subjectImage} alt="Subject" />
```

### Import Both
```typescript
import { icons, images } from '@/assets/assets'
// or
import { assets } from '@/assets'

// Usage
const { icons, images } = assets
```

## Current Setup

Currently, all assets are served from the Figma MCP server at `http://localhost:3845/assets/`.

### To Use Local Files

1. Download assets from Figma
2. Place them in `public/images/` directory
3. Update `assets.ts` to use local paths:

```typescript
// Change from:
brandLogo: `${FIGMA_BASE_URL}/imgBrandLogo`,

// To:
brandLogo: '/images/brand-logo.svg',
```

## Available Assets

### Icons
- `brandLogo` - Brand logo
- `menu` - Menu icon
- `search` - Search icon
- `ioFoundationFrame` - IO Foundation logo
- `arrowRight` - Arrow right icon
- `caretRight` - Caret right icon
- `facebook` - Facebook icon
- `instagram` - Instagram icon
- `twitter` - Twitter icon
- `whatsapp` - WhatsApp icon
- `telegram` - Telegram icon

### Images
- `subjectImage` - Hero section subject image
- `ellipse5` - Yellow arch decorative element
- `intersect` - Intersect overlay
- `pinkCircle` - Pink circle decorative element
- `featureIcon1-4` - Feature section icons
- `phoneScreen1-3` - Phone mockup screens
- `phoneSample1,3,4` - Phone sample images
- `phoneKeepIt, phoneKeepIt1` - Phone keep it elements
- `phoneShadow, phoneShadow1, phoneShadow2` - Phone shadows
- `phoneBorder` - Phone border
- `phoneEllipse` - Phone ellipse
- `phoneSoundCamera, phoneSoundCamera1, phoneSoundCamera2` - Phone camera elements
- `articleImage1-3` - Article thumbnail images
- `decorativeLine` - Decorative line separator

## TypeScript Types

Type-safe asset keys are available:

```typescript
import type { IconKey, ImageKey } from '@/assets/assets'

const iconKey: IconKey = 'brandLogo' // ✅ Valid
const invalidKey: IconKey = 'invalid' // ❌ Type error
```










