/**
 * Design Tokens
 * 
 * This file exports all design tokens from the Figma design system.
 * Tokens are organized by category (colors, typography) and can be used
 * across the application for consistent styling.
 */

// Color Tokens
export const colors = {
  primary: {
    100: '#F8D3E1',
    200: '#EF9FBE',
    300: '#E66B9A',
    400: '#E14F87',
    500: '#A11B4F',
  },
  secondary: {
    100: '#A0F8C6',
    200: '#59F39B',
    300: '#10E06A',
    400: '#0EC45D',
    500: '#0B9446',
  },
  success: {
    100: '#08E5A6',
    200: '#06B885',
    300: '#05966D',
    400: '#047857',
    500: '#034D37',
  },
  warning: {
    100: '#FFF1BA',
    200: '#FCD43D',
    300: '#D67A33',
    400: '#B45308',
    500: '#853D06',
  },
  error: {
    100: '#FFEDED',
    200: '#FFC9C9',
    300: '#FF8282',
    400: '#EF4444',
    500: '#AD3131',
  },
  neutral: {
    100: '#F8F8F8',
    200: '#E5E4E2',
    300: '#D9D8D6',
    400: '#CCCBCA',
    500: '#BDBCBB',
    600: '#ADACAC',
  },
  base: {
    black: '#000000',
    white: '#FFFFFF',
    dark: '#151616',
    purple: '#942EFB',
  },
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    primary: 'Euclid Circular A',
    display: 'Pulp Display',
  },
  display: {
    '01': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '53px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '53px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '53px',
        fontWeight: 400,
        lineHeight: '100%',
      },
    },
    '02': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 400,
        lineHeight: '100%',
      },
    },
  },
  heading: {
    h1: {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '60px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '60px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '60px',
        fontWeight: 400,
        lineHeight: '100%',
      },
    },
    h2: {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '48px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '48px',
        fontWeight: 400,
        lineHeight: '100%',
      },
    },
    h4: {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '100%',
      },
    },
  },
  headline: {
    '01': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '42px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      small: {
        semibold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '34px',
          fontWeight: 600,
          lineHeight: '100%',
        },
        bold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '34px',
          fontWeight: 700,
          lineHeight: '100%',
        },
        medium: {
          fontFamily: 'Euclid Circular A',
          fontSize: '34px',
          fontWeight: 400,
          lineHeight: '100%',
        },
      },
    },
    '02': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '34px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '34px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '34px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      small: {
        semibold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '27px',
          fontWeight: 600,
          lineHeight: '100%',
        },
        bold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '27px',
          fontWeight: 700,
          lineHeight: '100%',
        },
        medium: {
          fontFamily: 'Euclid Circular A',
          fontSize: '27px',
          fontWeight: 400,
          lineHeight: '100%',
        },
      },
    },
    '03': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '27px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '27px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '27px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      small: {
        semibold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '21px',
          fontWeight: 600,
          lineHeight: '100%',
        },
        bold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '21px',
          fontWeight: 700,
          lineHeight: '100%',
        },
        medium: {
          fontFamily: 'Euclid Circular A',
          fontSize: '21px',
          fontWeight: 400,
          lineHeight: '100%',
        },
      },
    },
    '04': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '21px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '21px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '21px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      small: {
        semibold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '17px',
          fontWeight: 600,
          lineHeight: '100%',
        },
        bold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '17px',
          fontWeight: 700,
          lineHeight: '100%',
        },
        medium: {
          fontFamily: 'Euclid Circular A',
          fontSize: '17px',
          fontWeight: 400,
          lineHeight: '100%',
        },
      },
    },
    '05': {
      semibold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '17px',
        fontWeight: 600,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '17px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      medium: {
        fontFamily: 'Euclid Circular A',
        fontSize: '17px',
        fontWeight: 500,
        lineHeight: '100%',
      },
      small: {
        semibold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '100%',
        },
        bold: {
          fontFamily: 'Euclid Circular A',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '100%',
        },
        medium: {
          fontFamily: 'Euclid Circular A',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '100%',
        },
      },
    },
  },
  subheadline: {
    regular: {
      fontFamily: 'Euclid Circular A',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '100%',
    },
    bold: {
      fontFamily: 'Euclid Circular A',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    underline: {
      fontFamily: 'Euclid Circular A',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '100%',
      textDecoration: 'underline',
    },
  },
  paragraph: {
    '01': {
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '100%',
      },
      underline: {
        fontFamily: 'Euclid Circular A',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        textDecoration: 'underline',
      },
    },
    '02': {
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '11px',
        fontWeight: 400,
        lineHeight: '20px',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '11px',
        fontWeight: 700,
        lineHeight: '24px',
      },
      underline: {
        fontFamily: 'Euclid Circular A',
        fontSize: '11px',
        fontWeight: 400,
        lineHeight: '20px',
        textDecoration: 'underline',
      },
    },
    '03': {
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '8px',
        fontWeight: 400,
        lineHeight: '15px',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '8px',
        fontWeight: 700,
        lineHeight: '20px',
      },
      underline: {
        fontFamily: 'Euclid Circular A',
        fontSize: '8px',
        fontWeight: 400,
        lineHeight: '20px',
        textDecoration: 'underline',
      },
    },
    small: {
      regular: {
        fontFamily: 'Euclid Circular A',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '100%',
      },
      bold: {
        fontFamily: 'Euclid Circular A',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '100%',
      },
    },
  },
  caption: {
    regular: {
      fontFamily: 'Euclid Circular A',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '100%',
    },
    bold: {
      fontFamily: 'Euclid Circular A',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    boldAllCaps: {
      fontFamily: 'Euclid Circular A',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
  },
  footer: {
    regular: {
      fontFamily: 'Euclid Circular A',
      fontSize: '17px',
      fontWeight: 400,
      lineHeight: '100%',
    },
    bold: {
      fontFamily: 'Euclid Circular A',
      fontSize: '17px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    boldAllCaps: {
      fontFamily: 'Euclid Circular A',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
  },
  button: {
    fontFamily: 'Euclid Circular A',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  text: {
    fontFamily: 'Pulp Display',
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '100%',
  },
} as const;

// Export all tokens
export const tokens = {
  colors,
  typography,
} as const;

export default tokens;

