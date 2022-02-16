export class MarvelService {
    //https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=20b7dfb520207205b3f0ab6bcd6d77ff
    #_apiBase = 'https://gateway.marvel.com:443/v1/public/'
    #_apiKey  = 'apikey=20b7dfb520207205b3f0ab6bcd6d77ff'

    #getResource = async (url) => {
        const result = await fetch(url)
        if (!result.ok) throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        return await result.json()
    }

    getAllCharacters = () => {
        return this.#getResource(`${this.#_apiBase}characters?limit=9&${this.#_apiKey}`)
    }

    getCharacter = (id) => {
        return this.#getResource(`${this.#_apiBase}characters/${id}?limit=9&${this.#_apiKey}`)
    }
}
