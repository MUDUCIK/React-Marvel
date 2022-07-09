import { Link, NavLink } from 'react-router-dom'

import { Style } from './Style'

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? 'active-link' : '')

  return (
    <Style id='header'>
      <nav>
        <div>
          <p>
            <Link to='characters'>Marvel</Link> information portal
          </p>
        </div>
        <div>
          <NavLink to='characters' className={setActive}>
            Characters
          </NavLink>
          <span>/</span>
          <NavLink to='comics' className={setActive}>
            Comics
          </NavLink>
        </div>
      </nav>
    </Style>
  )
}

export default Header
