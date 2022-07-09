import styled from 'styled-components'

import { device } from '../../../styles/styled-components'

export const Style = styled.header`
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    height: clamp(80px, 26vh, 130px);

    font-weight: 700;

    div {
      font-size: 1.75rem;

      p > a {
        padding: 0.5em 0;

        color: ${({ theme: { colors } }) => colors.mainRedColor};
      }
    }

    div + div {
      font-size: 1.5rem;

      a {
        padding: 0.5em;

        &:focus {
          color: ${({ theme: { colors } }) => colors.mainRedColor};
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  @media ${device.tablet} {
    nav {
      flex-direction: column;
      justify-content: center;

      gap: 0.625rem 0;
    }
  }
`
