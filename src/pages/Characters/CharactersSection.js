import styled from 'styled-components'

import { device } from '../../styles/styled-components'

export const CharactersSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

  #characterInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    max-width: 440px;
  }

  @media ${device.bootstrapExtraLarge} {
    .characters-list {
      max-width: 420px;
    }
  }

  @media ${device.bootstrapLarge} {
    flex-direction: column-reverse;
    align-items: center;

    #characterInfo {
      width: 100%;
      max-width: unset;
    }
  }
`
