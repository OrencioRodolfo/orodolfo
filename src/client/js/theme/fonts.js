// Font weights
const weights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  ultraBold: 900,
};

// Text and line heights
const baseFontSize = 1;
const baseLineHeight = `${baseFontSize}rem`;

const textSettings = {
  xs: {
    fontSize: '.75rem',
    lineHeight: baseLineHeight,
  },
  sm: {
    fontSize: '.875rem',
    lineHeight: baseLineHeight,
  },
  nr: { // normal
    fontSize: '1rem',
    lineHeight: `${baseFontSize}rem`,
  },
  md: {
    fontSize: '1.333rem',
    lineHeight: `${baseFontSize * 2}`,
  },
  lg: {
    fontSize: '1.778rem',
    lineHeight: `${baseFontSize * 2}rem`,
  },
  xl: {
    fontSize: '2.3rem',
    lineHeight: `${baseFontSize * 2}rem`,
  },
};

// Font families
const fontFamilies = {
  primary: 'Open Sans',
  secondary: 'Raleway',
};

export {
  weights,
  textSettings,
  fontFamilies,
};
