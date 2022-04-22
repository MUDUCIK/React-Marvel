import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'
import { useMarvelService } from '../../services/MarvelService'

import Character from '../Character/Character'
import { device } from '../../styles/styled-components/queries'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ButtonBigger from '../ButtonBigger/ButtonBigger'

const CharactersWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem 20px;
  justify-content: center;

  max-width: 650px;

  padding: 0;
  margin: 0;

  list-style-type: none;

  li {
    display: flex;
  }

  @media ${device.laptop} {
    justify-content: center;
    gap: 1.875rem 1.5625rem;

    max-width: 100%;
  }

  @media ${device.tablet} {
    margin-top: clamp(20px, 10vh, 50px);
  }
`

const CharactersList = ({ onCharSelected, ...props }) => {
  const [charactersData, setCharactersData] = useState([])
  const [newCharLoading, setNewCharLoading] = useState(false)
  const [offset, setOffset] = useState(1500)
  const [maxReached, setMaxReached] = useState(true)
  const { getAllCharacters, loading, error } = useMarvelService()

  useEffect(() => {
    loadCharacters(offset, true)
  }, [])

  const onCharactersLoaded = ({ data: { results } }) => {
    let maxReached = results.length < 9

    setCharactersData((charactersData) => [...charactersData, ...results])
    setNewCharLoading(false)
    setOffset((offset) => offset + 9)
    setMaxReached(maxReached)
  }

  const loadCharacters = (offsetValue = offset, initial) => {
    initial ? setNewCharLoading(false) : setNewCharLoading(true)
    getAllCharacters(offsetValue).then(onCharactersLoaded)
  }

  const charactersItems = useMemo(() => {
    return charactersData.map(({ id, name, thumbnail }) => (
      <li key={id}>
        <Character
          id={id}
          name={name}
          img={`${thumbnail.path}.${thumbnail.extension}`}
          onCharSelected={onCharSelected}
        />
      </li>
    ))
  }, [charactersData])

  const errorOccurred = useMemo(
    () => (error ? <ErrorMessage /> : null),
    [error]
  )
  const onLoading = useMemo(
    () => (loading && !newCharLoading ? <Spinner /> : null),
    [loading]
  )

  return (
    <>
      {onLoading}
      {errorOccurred}
      {!error && <CharactersWrapper>{charactersItems}</CharactersWrapper>}
      {!maxReached && (
        <ButtonBigger
          disabled={newCharLoading}
          onClick={() => loadCharacters(offset)}
          text='Load More'
          className='More'
        />
      )}
    </>
  )
}

CharactersList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
}

export default CharactersList
