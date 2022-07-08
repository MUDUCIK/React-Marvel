import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useMarvelService } from '../../services/MarvelService'

import { ErrorBoundary, ErrorMessage, NewsBoard, Spinner } from '../../components/elements'
import { CharacterInfo } from './CharacterInfo'
import { Style } from './Style'

function AboutComics() {
  const { id } = useParams()
  const { error, loading, getCharacter } = useMarvelService()
  const [characterData, setCharacterData] = useState({})

  useEffect(() => {
    getCharacter(id).then((characterData) => setCharacterData(characterData))
  }, [])

  const onLoading = loading && (
    <div className='spinner'>
      <Spinner />
    </div>
  )
  const content = !onLoading && !error && <View {...characterData} />
  const errorOccurred = error && <ErrorMessage />

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{characterData.name}</title>
        <meta name='description' content={characterData.description} />
      </Helmet>
      <Style>
        <NewsBoard />
        <div className='wrapper'>
          <CharacterInfo>
            {onLoading}
            {content}
            {errorOccurred}
          </CharacterInfo>
          <Link to='/characters' className='back-to-all'>
            Back to all
          </Link>
        </div>
      </Style>
    </ErrorBoundary>
  )
}

function View({ name, description, thumbnail }) {
  return (
    <>
      <img className='image' src={thumbnail} alt={name} />
      <div className='description'>
        <h4 className='title'>{name}</h4>
        <p className='about'>{description}</p>
      </div>
    </>
  )
}

export default AboutComics
