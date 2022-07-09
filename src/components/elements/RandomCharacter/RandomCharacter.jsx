import { useEffect, useMemo, useState } from 'react'

import { useMarvelService } from '../../../services/MarvelService'

import { Wrapper } from './Wrapper'
import { Button, Link, StyledReactRouterLink } from '../../controls'
import Spinner from '../../elements/Spinner/Spinner'
import ErrorMessage from '../../elements/ErrorMessage/ErrorMessage'

import decoration from '../../../img/Decoration.png'

const RandomCharacter = () => {
  const [char, setChar] = useState({})
  const [isCharLoading, setIsCharLoading] = useState(true)

  const { loading, error, getCharacter, clearError, cancelRequest } = useMarvelService()

  useEffect(() => {
    let isMounted = true
    if (isMounted) updateChar()

    return () => {
      isMounted = false
      cancelRequest()
    }
  }, [])

  const onCharLoaded = (char) => {
    setIsCharLoading(false)
    setChar(char)
  }

  const updateChar = () => {
    setIsCharLoading(true)
    clearError()
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

    getCharacter(id).then(onCharLoaded)
  }

  const errorMessage = useMemo(() => (error ? <ErrorMessage /> : null), [error])
  const spinner = useMemo(() => (loading ? <Spinner /> : null), [loading])
  const content = !(loading || error) ? <View char={char} /> : null
  const isLoadButtonDisabled = isCharLoading && !error

  return (
    <Wrapper id='randomCharacter'>
      <div className='item'>
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className='item'>
        <img src={decoration} alt='' width={202} height={190} />
        <h3>Random character for today! Do you want to get to know him better?</h3>
        <p>Or choose another one</p>
        <Button disabled={isLoadButtonDisabled} onClick={updateChar}>
          try it
        </Button>
      </div>
    </Wrapper>
  )
}

const View = ({ char }) => {
  let { name, description, thumbnail, homepage, id } = char

  if (description) {
    if (description.length >= 228) description = description.slice(0, 228) + '...'
  } else description = 'Description not found'

  return (
    <>
      <div className='character-image-wrapper'>
        <img
          className='character-image'
          src={thumbnail}
          width={180}
          height={180}
          alt={name ?? 'loading...'}
        />
      </div>
      <div className='description-wrapper'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <StyledReactRouterLink to={`/characters/${id}`}>homepage</StyledReactRouterLink>
          <Link target='_blank' href={homepage} grey>
            wiki
          </Link>
        </div>
      </div>
    </>
  )
}

export default RandomCharacter
