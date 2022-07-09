import styled from 'styled-components'
import { device } from '../../styles/styled-components'

export const CharacterInfo = styled.div`
  display: flex;
  min-width: 550px;
  min-height: 440px;

  .image {
    height: 100%;
    width: 293px;
    object-fit: contain;

    margin-bottom: auto;

    user-select: none;
    pointer-events: none;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1.5625rem 0.625rem;

    max-width: 550px;

    margin-left: 3.125rem;

    font-size: 1.125rem;
  }

  .title {
    font-weight: 700;
    font-size: 1.375rem;
  }

  .about {
    line-height: 1.5625rem;
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    min-width: auto;

    .description {
      align-items: center;
      margin-left: 0;
      margin-bottom: auto;
      text-align: center;
    }

    .image {
      width: 100%;
      max-width: 300px;

      margin-bottom: 0;
    }
  }
`
