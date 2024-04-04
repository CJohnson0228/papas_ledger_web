import { ThemeType } from './ThemeTypes'

export const lightTheme: ThemeType = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1540,
  },
  colors: {
    common: {
      black: '#000000',
      white: '#ffffff',
      paper: '#dddddd',
      background: '#eeeeee',
      text: '#121212',
    },
    primary: {
      light: '#38a9ff',
      main: '#2d87cc',
      dark: '#226599',
      text: '#fdfdfd',
    },
    secondary: {
      light: '#7c5ac2',
      main: '#63489b',
      dark: '#4a3674',
      text: '#fdfdfd',
    },
    grey: {
      light: '#5E6368',
      main: '#34373E',
      dark: '#25272D',
      text: '#fdfdfd',
    },
    warning: {
      light: '#ff4d4d',
      main: '#cc3e3e',
      dark: '#992e2e',
      text: '#fdfdfd',
    },
    caution: {
      light: '#ff5e3a',
      main: '#cc4b2e',
      dark: '#993823',
      text: '#fdfdfd',
    },
    note: {
      light: '#766d65',
      main: '#4e4943',
      dark: '#272422',
      text: '#fdfdfd',
    },
    success: {
      light: '#81B67D',
      main: '#62A35C',
      dark: '#4E824A',
      text: '#fdfdfd',
    },
  },
  spacing: (value) => {
    const newValue = value * 8
    return newValue + 'px'
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}
