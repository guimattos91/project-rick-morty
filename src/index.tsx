import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CharactersProvider } from 'context/CharactersContext'
import { EpisodesProvider } from 'context/EpisodesContext'
import { LocationProvider } from 'context/LocationContext'

import { GlobalStyle } from 'styles'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <GlobalStyle />
      <CharactersProvider>
        <LocationProvider>
          <EpisodesProvider>
            <App />
          </EpisodesProvider>
        </LocationProvider>
      </CharactersProvider>
    </Suspense>
  </React.StrictMode>,
)
