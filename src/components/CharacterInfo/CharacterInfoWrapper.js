import styled from 'styled-components'

import { device } from '../../styles/styled-components'

export const CharacterInfoWrapper = styled.div`
  padding: 1.5625rem;

  min-height: 770px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: #fff;
  
  @media ${device.tablet} {
    min-height: 710px;
  }
`
