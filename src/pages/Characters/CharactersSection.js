import styled from 'styled-components'

import { device } from '../../styles/styled-components'

export const CharactersSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1.3fr;
  gap: 1.25rem;

  margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

  #characterInfo {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    grid-column: 2;
    grid-row: 1;
  }

  @media ${device.tablet} {
    grid-template-columns: unset !important;
    #characterInfo {
      order: -1;
      grid-column: unset;
      grid-row: unset;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 2fr 2fr;
  }
`
