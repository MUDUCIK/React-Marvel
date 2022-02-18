import styled from "styled-components"
import analyze from "rgbaster"
import {useState} from "react"

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

    box-shadow: 0 5px 20px 3px ${({shadowColor}) => shadowColor};
  }

  &:hover {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px 2px ${({shadowColor}) => shadowColor};
  }

  img {
    height: 200px;
    width: 100%;

    pointer-events: none;
  }

  div {
    margin: 0 .9375em 0 .9375em;

    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
  }
`

const Character = ({id, img, name, ...props}) => {
    const [state, setState] = useState(() => '');

    const calculateColor = async () => {
        const color = await analyze(img, {
            ignore: [
                'rgb(0,0,0)',
                'rgb(255,255,255)',
                'rgb(254,254,254)',
                'rgb(1,1,1)'
            ],
            scale: 0.6
        })

        setState(() => color[0].color)
    }

    calculateColor()

    return (
        <a href="#characterInfo">
            <CharacterStyle
                key={id}
                shadowColor={state}>
                <img
                    src={img}
                    width={200}
                    height={200}/>
                <div>
                    <span>{name}</span>
                </div>
            </CharacterStyle>
        </a>
    )
}

export default Character
