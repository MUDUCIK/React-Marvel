import styled from 'styled-components'

import { device } from '../../../styles/styled-components/queries'

export const Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 25px 0 45px;

  background-color: ${({ theme }) => theme.colors.mainBgColor};

  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.mainTextWhite};

  img {
    height: auto;
    object-fit: cover;

    user-select: none;
    pointer-events: none;
  }

  .avengers {
    min-height: 100px;
    width: 152px;
  }

  .text {
    margin-right: auto;
    margin-left: 83px;

    line-height: 2.0625rem;
  }

  .avengers-logo {
    max-width: 133px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    gap: 15px;

    padding: 20px 0;

    .text {
      margin: 0;

      text-align: center;
    }
  }
`
