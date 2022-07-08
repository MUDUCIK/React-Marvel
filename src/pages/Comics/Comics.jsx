import { Helmet } from 'react-helmet'

import { ErrorBoundary, NewsBoard } from '../../components/elements'
import { ComicsList } from '../../components'
import { Style } from './Style'

function Comics() {
  return (
    <>
      <Helmet>
        <title>Marvel comics</title>
        <meta name='description' content='Marvel comics' />
      </Helmet>
      <Style>
        <NewsBoard />
        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary>
      </Style>
    </>
  )
}

export default Comics
