import { Routes, Route, Navigate } from "react-router-dom"

import Header from "./components/Header/Header"
import Characters from "./pages/Characters/Characters"
import { CharactersData } from "./components/charactersData"

function App() {
  return (
    <div className="page">
      <main>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="characters" />} />
            <Route
              path="characters"
              element={<Characters characters={CharactersData} />}
            />
            <Route path="comics" element={<div>awdawdawdawdawd</div>} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
