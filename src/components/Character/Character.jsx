import { usePalette } from 'react-palette'
import { Link } from 'react-scroll'

import { Style } from './Style'

const Character = ({ img, name, id, onCharSelected, ...props }) => {
  const {
      data: { darkVibrant },
    } = usePalette(img),
    smooth = document.documentElement.clientWidth <= 768

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
        <img src={img} width={200} height={200} alt={name} />
        <div>
          <span>{name}</span>
        </div>
      </Link>
    </Style>
  )
}

export default Character
