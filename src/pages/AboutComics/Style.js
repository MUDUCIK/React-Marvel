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

  .image-wrapper {
    height: 450px;
    width: 293px;
  }

  .back-to-all {
    min-width: 96px;

    padding: 0 0 10px 20px;

    font-weight: 700;
    font-size: 1.125rem;

    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.mainHoverRed};
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

    .image-wrapper {
      min-height: 450px;
      height: auto;
      width: auto;

      img {
        object-fit: cover;
      }
    }

    .back-to-all {
      padding: 10px 20px;

      color: ${({ theme }) => theme.colors.mainTextWhite};
      background-color: ${({ theme }) => theme.colors.mainRedColor};

      &:hover {
        color: ${({ theme }) => theme.colors.mainTextWhite};
      }
    }
  }
`
