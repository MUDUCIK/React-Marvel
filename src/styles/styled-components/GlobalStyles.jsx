import { createGlobalStyle } from 'styled-components'

import { device } from './queries'

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-red-color: #9F0013;
    --main-hover-red: #950018;
    --main-success-color: #03710E;
    --main-bg-color: #232222;
    --main-bg-grey: #5C5C5C;
    --main-hover-grey: #4e4e4e;
    --main-text-black: #000000;
    --main-text-white: #ffffff;
  }

  html {
    font-size: 16px;
  }

  body {
    position: relative;

    font-family: 'Roboto Condensed', Roboto, serif;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    margin: 0;
    padding: 0;

    line-height: 1;
  }

  a {
    text-decoration: none;
    color: var(--main-text-black);
  }

  .page {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    position: relative;

    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 1140px;

    margin: 0 auto;
    padding: 0 .9375rem;
  }

  .active-link {
    color: var(--main-red-color);
  }


  //Skeleton
  .char__select {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .skeleton {
    &__header {
      display: grid;
      grid-template-columns: 40px auto;
      column-gap: 10px;
      align-items: center;
    }

    &__circle {
      width: 40px;
      height: 40px;
      background-color: #C4C4C4;
      border-radius: 100%;
    }

    &__mini {
      width: 100%;
      height: 16px;
      background-color: #C4C4C4;
    }

    &__block {
      height: 35px;
      width: 100%;
      background-color: #C4C4C4;
      margin-top: 15px;
    }
  }

  .pulse {
    animation: pulse 1.5s ease-in-out .5s infinite
  }

  @keyframes pulse {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }

  //Skeleton

  @media ${device.tablet} {
    html {
      font-size: 14px;
    }
  }
`
