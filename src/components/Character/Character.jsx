import styled from "styled-components"

const CharacterStyle = styled.button`
  display: flex;
  flex-direction: column;

  gap: .9375em 0;

  color: var(--main-text-white);
  font-size: 1.5rem;

  min-height: 320px;
  max-width: 200px;

  padding: 0;

  background-color: var(--main-bg-color);
  box-shadow: 5px 5px .45em rgba(0, 0, 0, 0.25);
  transition: box-shadow .3s ease, transform .3s ease;
  outline: none;
  border: none;

  &:focus {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px var(--main-hover-red);
  }

  img {
    height: 200px;
    width: 100%;

    pointer-events: none;
  }

  span {
    margin-left: .9375em;

    text-transform: uppercase;
  }
`

const Character = ({id, img, width, height, name, shadowColor, ...props}) => {

    return (
        <CharacterStyle
            key={id}
            onClick={() => alert('HAHLHLHA')}
            shadowColor={shadowColor}>
            <img
                src={img}
                width={width}
                height={height}/>
            <span>{name}</span>
        </CharacterStyle>
    )
}

export default Character
