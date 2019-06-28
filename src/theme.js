import { createMuiTheme } from '@material-ui/core/styles'
import { createGlobalStyle, css } from 'styled-components'

export const theme = {
  colors: {
    light: '#f2f5f8',
    dark: '#303030',
    grey: '#454545',
    red: '#e74c3d',
    blue: '#035985',
    yellow: '#ffba29',
  },
}

const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 992,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.colors.light,
      main: theme.colors.red,
      secondary: theme.colors.blue,
      dark: theme.colors.dark,
      contrastText: theme.colors.light,
    },
    secondary: {
      light: theme.colors.light,
      main: theme.colors.dark,
      dark: theme.colors.yellow,
      contrastText: theme.colors.light,
    },
    // error: will use the default color
  },
})

export const GlobalStyle = createGlobalStyle`
a { all: unset; }
a { :hover { cursor: pointer; } }
html {max-width: 100vw;}
html {background: 'black';}
body {width: 100%; min-height: 100vh;}
svg {width: auto;}
`
