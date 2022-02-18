import {NavLink, Link} from "react-router-dom"
import styled from 'styled-components'
import {device} from "../../styles/styled-components/queries"

const HeaderStyle = styled.header`
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    height: clamp(80px, 26vh, 130px);

    font-weight: 700;

    div {
      font-size: 1.75rem;

      p > a {
        padding: .5em 0;

        color: var(--main-red-color);
      }
    }

    div + div {
      font-size: 1.5rem;

      a {
        padding: .5em;
        
        &:focus {
          color: var(--main-red-color);
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  @media ${device.tablet} {
    nav {
      flex-direction: column;
      justify-content: center;

      gap: .625rem 0;
    }
  }

`

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Header = () => {
    return (
        <HeaderStyle>
            <nav>
                <div>
                    <p><Link to="characters">Marvel</Link> information portal</p>
                </div>
                <div>
                    <NavLink to="characters" className={setActive}>Characters</NavLink>
                    <span>/</span>
                    <NavLink to="comics" className={setActive}>Comics</NavLink>
                </div>
            </nav>
        </HeaderStyle>
    )
}

export default Header
