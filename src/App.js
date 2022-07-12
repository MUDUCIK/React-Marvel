import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from './components/elements'

const AboutComics = lazy(() => import('./pages/AboutComics/AboutComics'))
const Characters = lazy(() => import('./pages/Characters/Characters'))
const AboutCharacter = lazy(() => import('./pages/AboutCharacter/AboutCharacter'))
const Comics = lazy(() => import('./pages/Comics/Comics'))

function App() {
  return (
    <div className='page'>
      <main>
        <div className='container'>
          <Header />
          <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={<Navigate to='characters' />} />
              <Route path='characters'>
                <Route index element={<Characters />} />
                <Route path=':id' element={<AboutCharacter />} />
              </Route>
              <Route path='comics'>
                <Route index element={<Comics />} />
                <Route path=':id' element={<AboutComics />} />
              </Route>
              <Route path='*' element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default App
