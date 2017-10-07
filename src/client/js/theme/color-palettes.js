const palettes = {
  primary: {
    base: '#0366d6',
    light: '#479bfb',
    lighter: '#f6fbff',
    dark: '#045cbf',
    darker: '#044b9a',
  },
  accent: {
    base: '#e36209',
    light: '#ff9d5a',
    lighter: '#ffc197',
    dark: '#d25500',
    darker: '#a54300',
  },
  foreground: {
    base: '#24292e',
    light: '#454c52',
    lighter: '#5b656d',
    dark: '#171b1f',
    darker: '#000',
  },
  background: {
    base: '#dadada',
    light: '#f6f8fa',
    lighter: '#fafbfc',
    dark: '#ababab',
    darker: '#676767',
  },
  positive: {
    base: '#28a745',
    light: '#3dd25f',
    lighter: '#8ce4a0',
    dark: '#18692a',
    darker: '#0c4218',
  },
  negative: {
    base: '#e34c26',
    light: '#ea7c60',
    lighter: '#ff9f86',
    dark: '#d43e18',
    darker: '#b52f0d',
  },
};

const transparencies = {
  dark: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgba(255, 255, 255, .70)',
    disabled: 'rgba(255, 255, 255, .5)',
    hint: 'rgba(255, 255, 255, .5)',
  },
  light: {
    primary: 'rgba(0, 0, 0, .87)',
    secondary: 'rgba(0, 0, 0, .54)',
    disabled: 'rgba(0, 0, 0, .38)',
    hint: 'rgba(0, 0, 0, .38)',
  },
};

export {
  palettes,
  transparencies,
};
