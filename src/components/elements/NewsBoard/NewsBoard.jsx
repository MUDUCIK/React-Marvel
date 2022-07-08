import { Style } from './Style'

import avengers from '../../../img/Avengers.png'
import avengersLogo from '../../../img/Avengers-logo.png'

function NewsBoard() {
  return (
    <Style>
      <img className='avengers' src={avengers} alt='' />
      <p className='text'>
        New comics every week!
        <br />
        Stay tuned!
      </p>
      <img className='avengers-logo' src={avengersLogo} alt='' />
    </Style>
  )
}

export default NewsBoard
