import { useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { useMarvelService } from '../../services/MarvelService'
import {
  CharactersContext,
  CharactersUpdateContext,
} from '../../context/CharactersContext/CharactersContext'

import { Grid } from './Grid'
import { Style } from './Style'
import Character from '../Character/Character'
import Spinner from '../elements/Spinner/Spinner'
import ErrorMessage from '../elements/ErrorMessage/ErrorMessage'
import ButtonBigger from '../controls/ButtonBigger/ButtonBigger'

const CharactersList = ({ onCharSelected }) => {
  const [newCharLoading, setNewCharLoading] = useState(false)
  const [maxReached, setMaxReached] = useState(true)
  const { getAllCharacters, loading, error, cancelRequest, clearError } = useMarvelService()
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
    clearError()
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
    <Style>
      {onLoading}
      {errorOccurred}
      {!error && <Grid className='characters-list'>{charactersItems}</Grid>}
      {!maxReached && (
        <ButtonBigger
          disabled={newCharLoading}
          onClick={() => loadCharacters(offset)}
          text='Load More'
          className='More'
        />
      )}
    </Style>
  )
}

CharactersList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
}

export default CharactersList
