import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { CharacterInfo, CharactersList } from '../../components'
import { ErrorBoundary, RandomCharacter, SearchCharacterByName } from '../../components/elements'

import { CharacterSectionDecoration } from './CharacterSectionDecoration'
import { CharactersSection } from './CharactersSection'
import { CharactersPageStyle } from './CharactersPageStyle'
import decoration from '../../img/bg_asset.png'

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(0)

  const onCharSelected = (id) => {
    setSelectedChar(id)
  }

  return (
    <CharactersPageStyle>
      <Helmet>
        <title>Marvel Characters</title>
        <meta name='description' content='Marvel characters portal' />
      </Helmet>
      <RandomCharacter />
      <CharactersSection>
        <ErrorBoundary>
          <CharactersList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div id='characterInfo'>
          <ErrorBoundary>
            <CharacterInfo id={selectedChar} />
            <SearchCharacterByName />
          </ErrorBoundary>
        </div>
      </CharactersSection>
      <CharacterSectionDecoration src={decoration} />
    </CharactersPageStyle>
  )
}

export default Characters
