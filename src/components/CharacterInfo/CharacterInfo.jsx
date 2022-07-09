import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'

import { useMarvelService } from '../../services/MarvelService'

import { Link, StyledReactRouterLink } from '../controls'
import Spinner from '../elements/Spinner/Spinner'
import ErrorMessage from '../elements/ErrorMessage/ErrorMessage'
import Skeleton from '../elements/Skeleton/Skeleton'
import { CharacterBody } from './CharacterBody'
import { CharacterInfoWrapper } from './CharacterInfoWrapper'
import { CharacterHeader } from './CharacterHeader'

const CharacterInfo = ({ id }) => {
  const [characterData, setCharacterData] = useState(null)

  const { loading, error, getCharacter, clearError } = useMarvelService()

  const onCharLoaded = (char) => {
    setCharacterData(char)
  }

  const onCharRequest = (id) => {
    clearError()
    getCharacter(id).then(onCharLoaded)
  }

  useEffect(() => {
    if (id) onCharRequest(id)
  }, [id])

  const skeleton = loading || error || characterData ? null : <Skeleton />
  const onLoading = loading ? <Spinner /> : null
  const errorOccurred = error ? <ErrorMessage /> : null
  const content = !loading && !error && characterData ? <View char={characterData} /> : null

  return (
    <Element name='characterInfo'>
      <CharacterInfoWrapper>
        {onLoading}
        {errorOccurred}
        {skeleton}
        {content}
      </CharacterInfoWrapper>
    </Element>
  )
}

const View = ({ char: { id, name, description, thumbnail, homepage, wiki, comics } }) => {
  if (!description) description = 'Description not found'

  let newComics = []

  for (let i = 0; i < comics.length; i++)
    if (i < 10)
      newComics.push({
        name: comics[i].name,
      })
    else break

  return (
    <>
      <CharacterHeader>
        <img src={thumbnail} alt={name} width={150} height={150} />
        <div>
          <span>{name}</span>
          <div>
            <StyledReactRouterLink to={`/characters/${id}`}>homepage</StyledReactRouterLink>
            <Link href={homepage} target='_blank' grey>
              wiki
            </Link>
          </div>
        </div>
      </CharacterHeader>
      <CharacterBody>
        <p>{description}</p>
        <span>Comics:</span>
        <ul>
          {comics.length > 0 ? null : 'There is no comics with this character!'}
          {newComics.map(({ name, url }, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </CharacterBody>
    </>
  )
}

CharacterInfo.propTypes = {
  id: PropTypes.number.isRequired,
}

export default CharacterInfo
