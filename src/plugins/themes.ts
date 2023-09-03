const defaultColors = {
  white: '#fff',
  black: '#000',
  
  textGrey: '#b9b9b9',
  error: '#B00020',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

const light = {
  dark: false,
  colors: {
    ...defaultColors,
  },
}

const dark = {
  dark: true,
  colors: {
    'background-app': '#e0eaeb',
    background: '#D3D3D3',
    surface: '#D3D3D3',
    foreground: '#FFFFFF',
    label: '#6e6e6e',
    primary: '#702f3b',
    'primary-variant': '#2828be',
    secondary: '#b7dae0',
    tertiary: '#333333',
    accent: '#000000',
    'accent-variant': '#FFFFFF',
    neutral: '#D3D3D3',
    'neutral-variant': '#8B4513',

    ...defaultColors,
  },
}

export default { light, dark }
