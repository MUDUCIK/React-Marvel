import PropTypes from 'prop-types'

import { Style } from './Style'

const StyledReactRouterLink = ({ children, to, ...props }) => (
  <Style to={to} {...props}>
    {children}
  </Style>
)

StyledReactRouterLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default StyledReactRouterLink
