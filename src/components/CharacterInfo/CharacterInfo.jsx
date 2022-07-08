import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'

import { useMarvelService } from '../../services/MarvelService'

import { device } from '../../styles/styled-components/queries'

import { Link, StyledReactRouterLink } from '../controls'
import Spinner from '../elements/Spinner/Spinner'
import ErrorMessage from '../elements/ErrorMessage/ErrorMessage'
import Skeleton from '../elements/Skeleton/Skeleton'

const CharacterInfoWrapper = styled.div`
  padding: 1.5625rem;

  min-height: 750px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: #fff;

  @media ${device.tablet} {
    min-height: 695px;
  }
`

const CharacterHeader = styled.div`
  display: flex;

  img {
    max-width: 100%;
    min-height: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-left: 1.5625rem;

    font-size: 1.5rem;

    span {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;

      padding: 0 0 0.625rem;
    }

    div {
      margin: 0;

      min-width: 100px;

      gap: 0.625em 0;
    }
  }
`

const CharacterBody = styled.div`
  margin-top: 0.9375rem;

  p {
    font-size: 14px;
    line-height: 1.2;
  }

  span {
    display: block;

    margin-top: 0.625em;

    font-weight: 700;
    font-size: 1.125rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem 0;

    list-style-type: none;
    padding: 0;

    margin-top: 0.625rem;

    li {
      display: flex;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      padding: 5px 10px;
    }
  }
`

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
