import { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { device } from '../../styles/styled-components/queries'
import { CharacterInfo, CharactersList } from '../../components'
import { ErrorBoundary, RandomCharacter, SearchCharacterByName } from '../../components/elements'

import decoration from '../../img/bg_asset.png'

const CharactersPageStyle = styled.div`
  padding: 0 0 45px 0;

  .More {
    margin: 0 auto;
  }
`

const CharactersSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1.3fr;
  gap: 1.25rem;

  margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

  #characterInfo {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    grid-column: 2;
    grid-row: 1;
  }

  @media ${device.tablet} {
    grid-template-columns: unset !important;
    #characterInfo {
      order: -1;
      grid-column: unset;
      grid-row: unset;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 2fr 2fr;
  }
`

const CharacterSectionDecoration = styled.img`
  position: absolute;
  z-index: -1;

  right: 10%;
  bottom: -150px;

  @media ${device.tablet} {
    display: none;
  }
`

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
