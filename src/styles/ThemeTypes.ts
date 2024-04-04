export type PaletteItem = {
  light: string
  main: string
  dark: string
  text: string
}

export type ThemeType = {
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  colors: {
    common: {
      black: string
      white: string
      paper: string
      background: string
      text: string
    }
    primary: PaletteItem
    secondary: PaletteItem
    grey: PaletteItem
    warning: PaletteItem
    caution: PaletteItem
    note: PaletteItem
    success: PaletteItem
  }
  spacing: (value: number) => string
  zIndex: {
    appBar: number
    drawer: number
    modal: number
    snackbar: number
    tooltip: number
  }
}
