export class MarvelService {
  //https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=20b7dfb520207205b3f0ab6bcd6d77ff
  #_apiBase = "https://gateway.marvel.com:443/v1/public/"
  #_apiKey = "apikey=20b7dfb520207205b3f0ab6bcd6d77ff"

  #getResource = async (url) => {
    const result = await fetch(url)
    if (!result.ok)
      throw new Error(`Could not fetch ${url}, status: ${result.status}`)
    return await result.json()
  }

  getAllCharacters = () => {
    return this.#getResource(
      `${this.#_apiBase}characters?limit=9&${this.#_apiKey}`
    )
  }

  getCharacter = async (id) => {
    const res = await this.#getResource(
      `${this.#_apiBase}characters/${id}?${this.#_apiKey}`
    )

    return this._transformCharacter(res.data.results[0])
  }

  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    }
  }
}
