import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useMarvelService } from '../../services/MarvelService'

import { ErrorBoundary, ErrorMessage, NewsBoard, Spinner } from '../../components/elements'
import { Style } from './Style'
import { ComicsInfo } from './ComicsInfo'
import ImageWithLoader from '../../components/elements/ImageWithLoader/ImageWithLoader'

function AboutComics() {
  const { id } = useParams()
  const { error, loading, getComics } = useMarvelService()
  const [comicsData, setComicsData] = useState({})
  const [firstLoading, setFirstLoading] = useState(true)

  useEffect(() => {
    getComics(id).then((comicsData) => setComicsData(comicsData))
    setFirstLoading(false)
  }, [])

  const onLoading = loading && (
    <div className='spinner'>
      <Spinner />
    </div>
  )
  const content = !loading && !firstLoading && !error && <View {...comicsData} />
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
      <div className='image-wrapper'>
        <ImageWithLoader className='image' src={image} alt={title} />
      </div>
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
