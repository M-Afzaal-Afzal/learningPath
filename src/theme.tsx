import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: `Inter, sans-serif`,
  heading: `Product Sans, sans-serif`,
}

const breakpoints = createBreakpoints({
  sm: '20em',
  md: '30em',
  lg: '48em',
  xl: '64em',
  '2xl': '75em',
})

const colors = {
  brand: {
    blue: "#25CED1",
    textDark: "#262B38",
    grey: '#C6C6C6',
    bgGrey:'#F4F5F5',
    textGrey: '#7C7C7C',
    red: '#EA5252',
    orange: '#FF8A5B',
    yellow: '#FFE456',
  }
}

const theme = extendTheme({
  fonts,
  breakpoints,
  colors,
})

export default theme;
