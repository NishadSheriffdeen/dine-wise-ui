import { createTheme } from '@mui/material/styles'

export const fontFamily = 'SF Pro Text, sans-serif'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          fontSize: '15px',
          height: '35px',
          paddingLeft: 18,
          paddingRight: 18,
        },
        sizeLarge: {
          fontSize: '16px',
          height: '40px',
          paddingLeft: 18,
          paddingRight: 18,
        },
        sizeSmall: {
          fontSize: '14px',
          height: '33px',
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    htmlFontSize: 16,
    fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily,
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily,
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily,
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontFamily,
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily,
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily,
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily,
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily,
      fontWeight: 400,
      fontSize: '0.8rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
})

export default theme
