import { useContext, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useMarvelService } from '../../services/MarvelService'
import { ComicsContext, ComicsUpdateContext } from '../../context/ComicsContext/ComicsContext'

import { Grid } from './Grid'
import { Comics as ComicsItem } from '../index'
import ButtonBigger from '../controls/ButtonBigger/ButtonBigger'
import { ErrorMessage, Spinner } from '../elements'

function ComicsList(props) {
  const [newComicsLoading, setNewComicsLoading] = useState(false)
  const [maxReached, setMaxReached] = useState(true)
  const { loading, error, getAllComics, cancelRequest } = useMarvelService()
  const { comics, offset } = useContext(ComicsContext)
  const { addComics, changeOffset } = useContext(ComicsUpdateContext)

  useEffect(() => {
    let isMounted = true
    if (isMounted) initComics(offset, true)

    return () => {
      cancelRequest()
      isMounted = false
    }
  }, [])

  const onComicsLoaded = (comics) => {
    let maxReached = comics.length < 8

    addComics(comics)
    setNewComicsLoading(false)
    changeOffset(8)
    setMaxReached(maxReached)
  }

  const initComics = (offsetValue = offset, initial) => {
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true)
    if (!comics.length) getAllComics(offsetValue).then(onComicsLoaded)
    if (comics.length) setMaxReached(false)
  }

  const loadComics = (offsetValue) => {
    getAllComics(offsetValue).then(onComicsLoaded)
    setNewComicsLoading(true)
  }

  const onLoading = loading && !newComicsLoading && <Spinner />
  const errorOccurred = error && <ErrorMessage />
  const content = !error
  const comicsItems = useMemo(
    () =>
      comics.map((comics) => (
        <Link key={comics.id} to={`/comics/${comics.id}`}>
          <ComicsItem {...comics} />
        </Link>
      )),
    [comics]
  )

  return (
    <>
      <Grid>
        {errorOccurred}
        {onLoading}
        {content && comicsItems}
      </Grid>
      {!maxReached && (
        <ButtonBigger
          disabled={newComicsLoading}
          onClick={() => loadComics(offset)}
          text='Load More'
          className='More'
        />
      )}
    </>
  )
}

export default ComicsList
