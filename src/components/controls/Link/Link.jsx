import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  border: 5px solid transparent;

  width: 100%;
  max-width: 6.875em;

  padding: 0.3125em 0;

  font-size: 1rem;
  color: var(--main-text-white);
  text-decoration: none;

  cursor: pointer;

  background-color: ${({ grey }) => (grey ? 'var(--main-bg-grey)' : 'var(--main-red-color)')};
  clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 35%);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ grey }) => (grey ? 'var(--main-hover-grey)' : 'var(--main-hover-red)')};
    color: var(--main-text-white);
  }

  &:focus {
    outline: none;
    border: 5px solid ${({ grey }) => (grey ? `var(--main-hover-red)` : 'var(--main-hover-grey)')};
  }
`

const Link = ({ children, href, ...props }) => (
  <ButtonStyle href={href} {...props}>
    {children}
  </ButtonStyle>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  href: '#',
}

export default Link
