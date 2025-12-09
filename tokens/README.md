# Design Tokens

This directory contains the design tokens extracted from the Figma design system. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

## Structure

```
tokens/
├── colors.json          # Color tokens in JSON format
├── typography.json      # Typography tokens in JSON format
├── index.ts            # TypeScript/JavaScript constants
├── tokens.css          # CSS custom properties
└── README.md          # This file
```

## Formats

### JSON Format (`colors.json`, `typography.json`)

These files follow the W3C Design Tokens format and can be used with design token tools like:
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Theo](https://github.com/salesforce-ux/theo)
- Figma plugins for token export

### TypeScript/JavaScript (`index.ts`)

Type-safe constants that can be imported directly into your components:

```typescript
import { colors, typography } from './tokens';

// Usage
const primaryColor = colors.primary[500];
const buttonStyle = typography.button;
```

### CSS Custom Properties (`tokens.css`)

CSS variables that can be imported into your stylesheets:

```css
@import './tokens/tokens.css';

.my-button {
  background-color: var(--color-primary-500);
  font-family: var(--typography-button-font-family);
  font-size: var(--typography-button-font-size);
}
```

## Usage Examples

### React/TypeScript Component

```typescript
import { colors, typography } from './tokens';

const Button = () => {
  return (
    <button
      style={{
        backgroundColor: colors.primary[500],
        color: colors.base.white,
        fontFamily: typography.button.fontFamily,
        fontSize: typography.button.fontSize,
        fontWeight: typography.button.fontWeight,
        lineHeight: typography.button.lineHeight,
      }}
    >
      Click me
    </button>
  );
};
```

### CSS-in-JS (styled-components, emotion, etc.)

```typescript
import styled from 'styled-components';
import { colors, typography } from './tokens';

const StyledButton = styled.button`
  background-color: ${colors.primary[500]};
  color: ${colors.base.white};
  font-family: ${typography.button.fontFamily};
  font-size: ${typography.button.fontSize};
  font-weight: ${typography.button.fontWeight};
  line-height: ${typography.button.lineHeight};
`;
```

### Plain CSS

```css
@import './tokens/tokens.css';

.button {
  background-color: var(--color-primary-500);
  color: var(--color-base-white);
  font-family: var(--typography-button-font-family);
  font-size: var(--typography-button-font-size);
  font-weight: var(--typography-button-font-weight);
  line-height: var(--typography-button-line-height);
}
```

## Color System

Colors are organized by semantic meaning:

- **Primary**: Main brand color (pink/magenta scale)
- **Secondary**: Secondary brand color (green scale)
- **Success**: Positive feedback states
- **Warning**: Cautionary states
- **Error**: Error/destructive actions
- **Neutral**: Grayscale for backgrounds, borders, text
- **Base**: Fundamental colors (black, white, dark, purple)

Each color family uses a numeric scale (100-500, with Neutral extending to 600) where higher numbers represent darker/more saturated colors.

## Typography System

Typography tokens include:

- **Display**: Largest text styles (53px, 42px)
- **Headline**: Heading styles (42px down to 17px) with small variants
- **Subheadline**: Subheading style (20px)
- **Paragraph**: Body text styles (14px, 11px, 8px)
- **Caption**: Small text style (14px)
- **Footer**: Footer text style (17px)
- **Button**: Button-specific typography
- **Text**: Special text style using Pulp Display font

Each typography token includes:
- `fontFamily`: Font family name
- `fontSize`: Font size in pixels
- `fontWeight`: Font weight (400, 500, 600, 700)
- `lineHeight`: Line height (percentage or pixels)

## Font Families

- **Primary**: `Euclid Circular A` - Used for most text styles
- **Display**: `Pulp Display` - Used for special text styles

## Maintenance

When updating tokens from Figma:

1. Update the JSON files first (source of truth)
2. Regenerate TypeScript constants from JSON if using a build tool
3. Update CSS custom properties to match
4. Ensure all formats stay in sync

## Next Steps

After setting up tokens, you can:

1. Import components from Figma
2. Use these tokens in component styles
3. Build a component library that references these tokens
4. Set up theme switching (light/dark) using the token structure


