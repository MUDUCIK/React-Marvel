import { createContext, useState } from 'react'

import { initialOffset } from '../../helpers'

export const ComicsContext = createContext()
export const ComicsUpdateContext = createContext()

export default function ComicsProvider({ children }) {
  const [comics, setComics] = useState([])
  const [offset, setOffset] = useState(initialOffset)

  const addComics = (comics) => {
    setComics((prevComicsData) => [...prevComicsData, ...comics])
  }

  const changeOffset = (offset) => {
    setOffset((prevOffset) => prevOffset + offset)
  }

  return (
    <ComicsContext.Provider value={{ comics, offset }}>
      <ComicsUpdateContext.Provider value={{ addComics, changeOffset }}>
        {children}
      </ComicsUpdateContext.Provider>
    </ComicsContext.Provider>
  )
}
