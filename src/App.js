import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from './components/elements'
import { AboutCharacter, AboutComics, Characters, Comics } from './pages'

function App() {
  return (
    <div className='page'>
      <main>
        <div className='container'>
          <Header />
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
        </div>
      </main>
    </div>
  )
}

export default App
