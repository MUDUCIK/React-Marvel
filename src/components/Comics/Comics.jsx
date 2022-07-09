import PropTypes from 'prop-types'

import { Style } from './Style'
import ImageWithLoader from '../elements/ImageWithLoader/ImageWithLoader'

function Comics({ thumbnail, title, price }) {
  return (
    <Style>
      <div className='comics-image'>
        <ImageWithLoader className='comics-image' src={thumbnail} alt={title} />
      </div>
      <h4 className='comics-name'>{title}</h4>
      <span className='comics-price'>{price}</span>
    </Style>
  )
}

Comics.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Comics
