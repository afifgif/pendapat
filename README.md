# Pendapat Design System

A Next.js-based design system with components built from Figma design tokens.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:

```bash
pnpm install
# or
npm install
```

2. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pendapat/
├── app/                    # Next.js app directory
│   ├── components/         # Component playground page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Button/            # Button component
│   ├── Typography/        # Typography component
│   └── ColorSwatch/       # Color swatch display
├── tokens/                # Design tokens
│   ├── colors.json        # Color tokens (JSON)
│   ├── typography.json    # Typography tokens (JSON)
│   ├── index.ts           # TypeScript constants
│   ├── tokens.css         # CSS custom properties
│   └── README.md          # Token documentation
└── design-token-structure.md  # Design token analysis
```

## Testing Components

Visit the component playground at `/components` to see all components in action:

- **Buttons**: All variants, sizes, and states
- **Typography**: All text styles from the design system
- **Colors**: Visual color swatches

## Components

### Button

A flexible button component with multiple variants and states.

```tsx
import { Button } from '@/components/Button'

<Button variant="primary" size="large">Click me</Button>
<Button variant="secondary" size="medium" state="outline">Outline</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'neutral'`
- `size`: `'small' | 'medium' | 'large'`
- `state`: `'default' | 'hover' | 'active' | 'outline'`

### Typography

Typography component that applies design system text styles.

```tsx
import { Typography } from '@/components/Typography'

<Typography variant="headline-01-bold">Heading</Typography>
<Typography variant="paragraph-01-regular">Body text</Typography>
```

**Props:**
- `variant`: Typography variant (see tokens for full list)
- `as`: HTML tag to render (optional, auto-detected)

## Design Tokens

All components use design tokens from the `tokens/` directory. Tokens are available in multiple formats:

- **TypeScript**: `import { colors, typography } from '@/tokens'`
- **CSS Variables**: `var(--color-primary-500)`
- **JSON**: For design tool integration

See `tokens/README.md` for detailed token documentation.

## Development

### Adding New Components

1. Create component in `components/ComponentName/`
2. Use design tokens from `@/tokens`
3. Add examples to `app/components/page.tsx`
4. Test in the component playground

### Updating Design Tokens

When updating tokens from Figma:

1. Update JSON files in `tokens/`
2. Update TypeScript constants in `tokens/index.ts`
3. Update CSS variables in `tokens/tokens.css`
4. Ensure all formats stay in sync

## Next Steps

- Import more components from Figma
- Add component documentation
- Set up Storybook for isolated component development
- Add unit tests
- Implement dark mode theme







