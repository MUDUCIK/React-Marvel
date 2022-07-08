import styled from 'styled-components'
import { device } from '../../styles/styled-components/queries'

export const Style = styled.div`
  padding-bottom: 3.125rem;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 3.125rem;
  }

  .back-to-all {
    min-width: 96px;

    padding: 0 0 10px 20px;

    font-weight: 700;
    font-size: 1.125rem;

    transition: color 0.3s ease;

    &:hover {
      color: var(--main-hover-red);
    }
  }

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media ${device.tablet} {
    .wrapper {
      flex-direction: column-reverse;
      align-items: center;
      gap: 30px;
    }

    .back-to-all {
      padding: 10px 20px;

      color: var(--main-text-white);
      background-color: var(--main-red-color);

      &:hover {
        color: var(--main-text-white);
      }
    }
  }
`
