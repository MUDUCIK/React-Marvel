import styled from 'styled-components'

import { device } from '../../styles/styled-components'

export const CharacterSectionDecoration = styled.img`
  position: absolute;
  z-index: -1;

  right: 10%;
  bottom: -150px;

  @media ${device.tablet} {
    display: none;
  }
`
