import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {
  colors: {
    mainRedColor: '#9F0013',
    mainHoverRed: '#950018',
    mainSuccessColor: '#03710E',
    mainBgColor: '#232222',
    mainBgGrey: '#5C5C5C',
    mainHoverGrey: '#4e4e4e',
    mainTextBlack: '#000000',
    mainTextWhite: '#ffffff',
  },
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
