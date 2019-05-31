import { createMuiTheme } from '@material-ui/core/styles'
import { createGlobalStyle } from 'styled-components'

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
`
