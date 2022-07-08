import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './styles/css/bootstrap-reboot.min.css'
import './styles/css/fonts.css'
import { GlobalStyles } from './styles/styled-components/GlobalStyles'

import ComicsProvider from './context/ComicsContext/ComicsContext'
import CharactersProvider from './context/CharactersContext/CharactersContext'

render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ComicsProvider>
        <CharactersProvider>
          <App />
        </CharactersProvider>
      </ComicsProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('marvel')
)
