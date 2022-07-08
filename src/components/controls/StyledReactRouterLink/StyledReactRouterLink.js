import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ButtonStyle = styled(Link)`
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

  &:disabled {
    background-color: var(--main-bg-grey);
    cursor: not-allowed;

    &:hover {
      background-color: var(--main-bg-grey);
    }
  }

  &:hover {
    background-color: ${({ grey }) => (grey ? 'var(--main-hover-grey)' : 'var(--main-hover-red)')};
    color: var(--main-text-white);
  }

  &:focus {
    outline: none;
    border: 5px solid ${({ grey }) => (grey ? `var(--main-hover-red)` : 'var(--main-hover-grey)')};
  }
`

const StyledReactRouterLink = ({ children, to, ...props }) => (
  <ButtonStyle to={to} {...props}>
    {children}
  </ButtonStyle>
)

StyledReactRouterLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default StyledReactRouterLink
