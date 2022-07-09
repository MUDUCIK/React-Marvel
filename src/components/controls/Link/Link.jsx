import PropTypes from 'prop-types'

import { Style } from './Style'

const Link = ({ children, href, ...props }) => (
  <Style href={href} {...props}>
    {children}
  </Style>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  href: '#',
}

export default Link
