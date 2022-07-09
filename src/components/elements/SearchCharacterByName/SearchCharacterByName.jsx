import { useContext, useMemo, useState } from 'react'

import { CharactersContext } from '../../../context/CharactersContext/CharactersContext'

import { Style } from './Style'
import { Button, StyledReactRouterLink } from '../../controls'
import { SkeletonForList } from '../index'

function SearchCharacterByName() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [foundCharacters, setFoundCharacters] = useState([])
  const { characters } = useContext(CharactersContext)

  const submitHandler = (e) => {
    e.preventDefault()
    setFoundCharacters([])
    setSuccess(false)
    setLoading(true)
    setError(false)
    setValidationError(false)

    if (!search) {
      setValidationError(true)
      setError(false)
      setLoading(false)
      return
    }

    const filteredCharacters = characters.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    )

    if (!filteredCharacters.length) {
      setError(true)
      setValidationError(false)
      setLoading(false)
      return
    }

    setFoundCharacters(filteredCharacters)
    setSuccess(true)
    setError(false)
    setValidationError(false)
    setLoading(false)
  }

  const handleValue = (e) => {
    const value = e.target.value

    setSearch(value)
  }

  const skeleton = !error && !validationError && !success && <SkeletonForList />
  const showErrorBlock = error || validationError
  const results = useMemo(
    () =>
      foundCharacters.map(({ id, name }) => (
        <li key={id} className='results__item'>
          <p className='results__text text'>{name}</p>
          <StyledReactRouterLink to={`/characters/${id}`} grey={+true}>
            Home page
          </StyledReactRouterLink>
        </li>
      )),
    [foundCharacters]
  )

  return (
    <Style error={error || validationError}>
      <p className='name'>Or find a character by name:</p>
      <form className='search-form' onSubmit={submitHandler}>
        <input type='text' placeholder='Enter name' onChange={handleValue} value={search} />
        <Button disabled={loading} type='submit'>
          find
        </Button>
      </form>
      {skeleton}
      {showErrorBlock && (
        <div className='result text'>
          {validationError && <p className='result__text text'>This field is required</p>}
          {error && (
            <p className='result__text text'>
              The character was not found. Check the name and try again
            </p>
          )}
        </div>
      )}
      {success && <ul className='results'>{results}</ul>}
    </Style>
  )
}

export default SearchCharacterByName
