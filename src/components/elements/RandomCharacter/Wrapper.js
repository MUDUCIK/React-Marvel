import styled from 'styled-components'

import { device } from '../../../styles/styled-components'

export const Wrapper = styled.div`
  display: flex;

  box-shadow: 5px 5px 1.25rem rgba(0, 0, 0, 0.25);

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    height: auto;
    width: 50%;
    min-height: 240px;
    padding: 30px;

    img {
      max-width: 100%;
      height: 180px;
    }

    .character-image-wrapper {
      height: 180px;
      width: 180px;

      margin-left: 0;

      img {
        height: 100%;
        object-fit: cover;
      }
    }

    .character-image {
      max-width: initial;
    }

    .description-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      width: 100%;
      height: 180px;

      margin-left: 1.875rem;

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      p {
        margin-bottom: auto;

        line-height: 1.3;
        font-size: 14px;
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 0 10px;

        max-height: 44px;
        max-width: 15.625rem;

        margin-left: 0;
      }
    }

    &:last-child {
      position: relative;

      padding-right: 30px;

      flex-direction: column;
      align-items: stretch;

      background-color: ${({ theme }) => theme.colors.mainBgColor};

      color: ${({ theme }) => theme.colors.mainTextWhite};

      font-size: 1.5rem;

      img {
        position: absolute;
        left: 70%;
        top: 25%;
        z-index: 1;

        pointer-events: none;
      }

      h3 {
        line-height: 1.2;
        max-width: 85%;
        z-index: 2;
      }

      p {
        margin-top: 10%;
        padding-bottom: 10px;
        z-index: 2;
      }

      button {
        margin-top: auto;
        z-index: 2;
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column;

    .item {
      width: 100%;
      height: 1px;

      &:last-child {
        background-position-y: 80%;
        background-position-x: 105%;

        img {
          left: 80%;
          top: 10%;
        }

        p {
          margin-top: 5%;
          padding-bottom: 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .item {
      flex-direction: column;

      height: auto;

      &:first-child {
        text-align: center;

        min-height: 420px;

        div {
          margin: 0;

          div {
            max-width: 100%;

            justify-content: center;
            gap: 0 5%;
          }
        }
      }

      h3 {
        margin-top: 20px;
      }
    }
  }

  @media ${device.customM} {
    .item:last-child {
      text-align: center;

      img {
        left: 70%;
        top: 25%;
      }

      h3 {
        margin: 0;
        max-width: 100%;
      }

      button {
        margin: 0 auto;
      }

      background: ${({ theme }) => theme.colors.mainBgColor};
    }
  }
`
