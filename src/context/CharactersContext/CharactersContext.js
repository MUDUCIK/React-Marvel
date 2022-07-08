import { createContext, useState } from 'react'

import { initialOffset } from '../../helpers'

export const CharactersContext = createContext()
export const CharactersUpdateContext = createContext()

export default function ComicsProvider({ children }) {
  const [characters, setCharacters] = useState([])
  const [offset, setOffset] = useState(initialOffset)

  const addCharacters = (characters) => {
    setCharacters((prevCharactersData) => [...prevCharactersData, ...characters])
  }

  const changeOffset = (offset) => {
    setOffset((prevOffset) => prevOffset + offset)
  }

  return (
    <CharactersContext.Provider value={{ characters, offset }}>
      <CharactersUpdateContext.Provider value={{ addCharacters, changeOffset }}>
        {children}
      </CharactersUpdateContext.Provider>
    </CharactersContext.Provider>
  )
}
