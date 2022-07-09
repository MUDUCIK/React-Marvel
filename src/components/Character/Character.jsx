import { useState } from 'react'
import { usePalette } from 'react-palette'
import { Link } from 'react-scroll'

import { Style } from './Style'
import ImageWithLoader from '../elements/ImageWithLoader/ImageWithLoader'

const Character = ({ img, name, id, onCharSelected }) => {
  const [loaded, setLoaded] = useState(false)
  const {
    data: { darkVibrant },
  } = usePalette(img)
  const smooth = document.documentElement.clientWidth <= 768

  const keyPressHandler = (e) => {
    const { code } = e

    if (code === 'Space' || code === 'Enter') onCharSelected(id)
  }

  return (
    <Style shadowColor={darkVibrant} onKeyPress={keyPressHandler}>
      <Link
        to='characterInfo'
        smooth={smooth}
        offset={-20}
        duration={500}
        onClick={() => onCharSelected(id)}
      >
        <div
          style={{
            height: '200px',
          }}
        >
          <ImageWithLoader src={img} alt={name} />
        </div>
        <div className='name'>
          <span>{name}</span>
        </div>
      </Link>
    </Style>
  )
}

export default Character
