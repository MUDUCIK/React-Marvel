import styled from "styled-components"

import Character from "../Character/Character";

const CharactersWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem 1.5625rem;

  max-width: 650px;

  padding: 0;
  margin: 0;
`

function CharactersList({items}) {
    const CharacterItems = items.map(({id, img, width, height, name}) => {

        return (
            <Character
                key={id}
                img={img}
                name={name}
                width={width}
                height={height}/>
        )
    })

    return (
        <CharactersWrapper>
            {CharacterItems}
        </CharactersWrapper>
    )
}

export default CharactersList
