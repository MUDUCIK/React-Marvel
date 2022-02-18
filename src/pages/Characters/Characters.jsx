import styled from "styled-components"

import RandomCharacter from "../../components/RandomCharacter/RandomCharacter"
import CharactersList from "../../components/CharactersList/CharactersList"

const CharactersSection = styled.section`
  display: flex;

  margin-top: clamp(1.25rem, 5vh, 3.125rem)
`

const CharacterInfo = styled.div`
  margin-left: 25px;

  width: 100%;
`

const Characters = ({characters}) => {
    return (<>
        <RandomCharacter/>
        <CharactersSection>
            <CharactersList items={characters}/>
            <CharacterInfo>
                <h3>awdawd</h3>
            </CharacterInfo>
        </CharactersSection>
    </>)
}

export default Characters
