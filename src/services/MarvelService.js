import { useHttp } from '../hooks/http.hook'

export const useMarvelService = () => {
  //	https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=0&apikey=20b7dfb520207205b3f0ab6bcd6d77ff
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  const _apiKey = 'apikey=20b7dfb520207205b3f0ab6bcd6d77ff'
  const _offset = 0

  const { loading, error, request, clearError } = useHttp()

  const getAllCharacters = (offset = _offset) => {
    return request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)

    return _transformCharacter(res.data.results[0])
  }

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    }
  }

  return {
    getCharacter,
    getAllCharacters,
    loading,
    error,
    clearError,
  }
}
