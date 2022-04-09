import { createGlobalStyle } from "styled-components"

import { device } from "./queries"

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-red-color: #9F0013;
    --main-hover-red: #950018;
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

  @media ${device.tablet} {
    html {
      font-size: 14px;
    }
  }
`
