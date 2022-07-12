import { useState } from 'react'
import PropTypes from 'prop-types'

function ImageWithLoader({ src, alt, ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && (
        <div
          className='pulse'
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#C4C4C4',
          }}
        />
      )}
      <img
        {...props}
        src={src}
        alt={alt ?? ''}
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

ImageWithLoader.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([undefined]).isRequired]),
  alt: PropTypes.string,
}

export default ImageWithLoader
