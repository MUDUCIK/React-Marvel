import { Navigate, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Header } from './components/elements'
import { Characters } from './pages'

function App() {
  return (
    <div className='page'>
      <main>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='characters' />} />
            <Route path='characters' element={<Characters />} />
            <Route
              path='comics'
              element={
                <>
                  <Helmet>
                    <title>Marvel comics</title>
                    <meta name='description' content='Marvel comics' />
                  </Helmet>
                  <div>awdawdawdawdawd</div>
                </>
              }
            />
            <Route path='*' element={<div>Page not found</div>} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
