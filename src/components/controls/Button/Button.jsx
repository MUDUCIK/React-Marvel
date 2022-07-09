import PropTypes from 'prop-types'

import { Button as Style } from '../../../styles/styled-components'

const Button = ({ children, ...props }) => <Style {...props}>{children}</Style>

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
