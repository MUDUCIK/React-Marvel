import styled from "styled-components"

import Character from "../Character/Character";
import {device} from "../../styles/styled-components/queries"

const CharactersWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem 0;
  justify-content: space-between;

  max-width: 650px;

  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    justify-content: center;
    gap: 1.875rem 1.5625rem;

    max-width: 100%;
    margin-top: clamp(20px, 10vh, 50px);
  }
`

function CharactersList({items}) {
    const CharacterItems = items.map(({id, img, name}) => {
        return (
            <Character
                key={id}
                img={img}
                name={name}/>
        )
    })

    return (
        <CharactersWrapper>
            {CharacterItems}
        </CharactersWrapper>
    )
}

export default CharactersList
