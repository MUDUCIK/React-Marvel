import { useHttp } from '../hooks/http.hook'

import { initialOffset } from '../helpers'

export const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  const _apiKey = 'apikey=20b7dfb520207205b3f0ab6bcd6d77ff'
  const _offset = initialOffset

  const { loading, error, request, clearError, cancelRequest } = useHttp()

  const getAllCharacters = (offset = _offset) => {
    return request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)

    return _transformCharacter(res.data.results[0])
  }

  const _transformCharacter = (char) => {
    const description = char.description.split(' ').join('').length
      ? char.description
      : 'No description'

    const thumbnail =
      char.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
        ? 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg'
        : char.thumbnail.path + '.' + char.thumbnail.extension

    return {
      id: char.id,
      name: char.name,
      description,
      thumbnail,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    }
  }

  const getAllComics = async (offset = _offset) => {
    const {
      data: { results },
    } = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)

    let result = []

    for (const comics of results) result.push(_transformComics(comics))

    return result
  }

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)

    return _transformComics(res.data.results[0])
  }

  const _transformComics = (comics) => {
    const description =
      comics.description && comics.description.length ? comics.description : 'No description'

    const image = `${
      comics.images[0]?.path ??
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge'
    }.${comics.images[0]?.extension ?? 'jpg'}`

    const price = comics.prices[0].price === 0 ? 'Not for sale' : `${comics.prices[0].price}$`
    const thumbnail = `${comics.thumbnail.path}.${comics.thumbnail.extension}`
    const language = comics.textObjects[0]?.language ?? 'en-us'

    return {
      id: comics.id,
      title: comics.title,
      description,
      image,
      price,
      thumbnail,
      pageCount: comics.pageCount,
      language,
    }
  }

  return {
    getCharacter,
    getAllCharacters,
    getAllComics,
    getComics,
    loading,
    error,
    clearError,
    cancelRequest,
  }
}
