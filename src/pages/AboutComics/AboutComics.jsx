import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useMarvelService } from '../../services/MarvelService'

import { ErrorBoundary, ErrorMessage, NewsBoard, Spinner } from '../../components/elements'
import { Style } from './Style'
import { ComicsInfo } from './ComicsInfo'

function AboutComics() {
  const { id } = useParams()
  const { error, loading, getComics } = useMarvelService()
  const [comicsData, setComicsData] = useState({})

  useEffect(() => {
    getComics(id).then((comicsData) => setComicsData(comicsData))
  }, [])

  const onLoading = loading && (
    <div className='spinner'>
      <Spinner />
    </div>
  )
  const content = !onLoading && !error && <View {...comicsData} />
  const errorOccurred = error && <ErrorMessage />

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{comicsData.title}</title>
        <meta name='description' content={comicsData.description} />
      </Helmet>
      <Style>
        <NewsBoard />
        <div className='wrapper'>
          <ComicsInfo>
            {onLoading}
            {content}
            {errorOccurred}
          </ComicsInfo>
          <Link to='/comics' className='back-to-all'>
            Back to all
          </Link>
        </div>
      </Style>
    </ErrorBoundary>
  )
}

function View({ title, description, image, price, pageCount, language }) {
  return (
    <>
      <img className='image' src={image} alt={title} />
      <div className='description'>
        <h4 className='title'>{title}</h4>
        <p className='about'>{description}</p>
        <span className='pages'>{pageCount} pages</span>
        <span className='language'>Language: {language}</span>
        <span className='price'>{price}</span>
      </div>
    </>
  )
}

export default AboutComics
