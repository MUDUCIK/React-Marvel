import { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { useMarvelService } from '../../services/MarvelService'
import {
  CharactersContext,
  CharactersUpdateContext,
} from '../../context/CharactersContext/CharactersContext'

import Character from '../Character/Character'
import { device } from '../../styles/styled-components/queries'
import Spinner from '../elements/Spinner/Spinner'
import ErrorMessage from '../elements/ErrorMessage/ErrorMessage'
import ButtonBigger from '../controls/ButtonBigger/ButtonBigger'

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

const CharactersList = ({ onCharSelected }) => {
  const [newCharLoading, setNewCharLoading] = useState(false)
  const [maxReached, setMaxReached] = useState(true)
  const { getAllCharacters, loading, error, cancelRequest } = useMarvelService()
  const { characters, offset } = useContext(CharactersContext)
  const { addCharacters, changeOffset } = useContext(CharactersUpdateContext)

  useEffect(() => {
    let isMounted = true
    if (isMounted) initCharacters(0, true)

    return () => {
      isMounted = false
      cancelRequest()
    }
  }, [])

  const onCharactersLoaded = ({ data: { results } }) => {
    let maxReached = results.length < 9

    addCharacters(results)
    setNewCharLoading(false)
    changeOffset(9)
    setMaxReached(maxReached)
  }

  const initCharacters = (offsetValue = offset, initial) => {
    initial ? setNewCharLoading(false) : setNewCharLoading(true)
    if (!characters.length) getAllCharacters(offsetValue).then(onCharactersLoaded)
    if (characters.length) setMaxReached(false)
  }

  const loadCharacters = (offsetValue) => {
    getAllCharacters(offsetValue).then(onCharactersLoaded)
    setNewCharLoading(true)
  }

  const charactersItems = useMemo(() => {
    return characters.map(({ id, name, thumbnail }) => (
      <li key={id}>
        <Character
          id={id}
          name={name}
          img={`${thumbnail.path}.${thumbnail.extension}`}
          onCharSelected={onCharSelected}
        />
      </li>
    ))
  }, [characters])

  const errorOccurred = error ? <ErrorMessage /> : null
  const onLoading = loading && !newCharLoading ? <Spinner /> : null

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
