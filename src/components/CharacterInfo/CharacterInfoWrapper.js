import styled from 'styled-components'
import { device } from '../../styles/styled-components'

export const CharacterInfoWrapper = styled.div`
  padding: 15px 1.5625rem 1.5625rem;

  height: 740px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: #fff;

  @media ${device.tablet} {
    min-height: 695px;
  }
`
