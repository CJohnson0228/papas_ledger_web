import { ThemeType } from './ThemeTypes'

export const darkTheme: ThemeType = {
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
      paper: '#333333',
      background: '#111111',
      text: '#dfdfdf',
    },
    primary: {
      light: '#60baff',
      main: '#38a9ff',
      dark: '#2d87cc',
      text: '#000000',
    },
    secondary: {
      light: '#967bce',
      main: '#7c5ac2',
      dark: '#63489b',
      text: '#000000',
    },
    grey: {
      light: '#92969C',
      main: '#5E6368',
      dark: '#494D53',
      text: '#000000',
    },
    warning: {
      light: '#ff7171',
      main: '#ff4d4d',
      dark: '#cc3e3e',
      text: '#000000',
    },
    caution: {
      light: '#ff7e61',
      main: '#ff5e3a',
      dark: '#cc4b2e',
      text: '#000000',
    },
    note: {
      light: '#d0c5b9',
      main: '#c4b6a8',
      dark: '#9d9286',
      text: '#000000',
    },
    success: {
      light: '#accea9',
      main: '#97c294',
      dark: '#799b76',
      text: '#000000',
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
