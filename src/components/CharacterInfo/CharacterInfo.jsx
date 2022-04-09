import styled from "styled-components"

import Button from "../Button/Button"

const CharacterInfoWrapper = styled.div`
  padding: 1.5625rem;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: #fff;
`

const CharacterHeader = styled.div`
  display: flex;

  img {
    max-width: 100%;
    height: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-left: 1.5625rem;

    font-size: 1.5rem;

    span {
      font-weight: 700;
      text-transform: uppercase;
    }

    div {
      margin: 0;

      min-width: 100px;

      gap: 0.625em 0;
    }
  }
`

const CharacterBody = styled.div`
  margin-top: 0.9375rem;

  p {
    font-size: 14px;
    line-height: 1.2;
  }

  span {
    display: block;

    margin-top: 0.625em;

    font-weight: 700;
    font-size: 1.125rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem 0;

    list-style-type: none;
    padding: 0;

    margin-top: 0.625rem;

    li {
      display: flex;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      a {
        width: 100%;

        padding: 5px 10px;

        &:focus {
          outline: 0.25rem solid var(--main-hover-red);
        }
      }
    }
  }
`

const CharacterInfo = ({ img, name }) => {
  return (
    <CharacterInfoWrapper>
      <CharacterHeader>
        <img src={img} alt={name} width={150} height={150} />
        <div>
          <span>{name}</span>
          <div>
            <Button text="homepage" />
            <Button text="wiki" grey />
          </div>
        </div>
      </CharacterHeader>
      <CharacterBody>
        <p>
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
          of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
          the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
          the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
          and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
          birth—in the form of a mare—to the eight-legged horse Sleipnir. In
          addition, Loki is referred to as the father of Váli in the Prose Edda.
        </p>
        <span>Comics:</span>
        <ul>
          <li>
            <a href="#">All-Winners Squad: Band of Heroes (2011) #3</a>
          </li>
          <li>
            <a href="#">Alpha Flight (1983) #50</a>
          </li>
          <li>
            <a href="#">Amazing Spider-Man (1999) #503</a>
          </li>
          <li>
            <a href="#">Amazing Spider-Man (1999) #504</a>
          </li>
          <li>
            <a href="#">
              AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
            </a>
          </li>
          <li>
            <a href="#">
              Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
            </a>
          </li>
          <li>
            <a href="#">
              Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade
              Paperback)
            </a>
          </li>
          <li>
            <a href="#">Vengeance (2011) #4</a>
          </li>
          <li>
            <a href="#">Avengers (1963) #1</a>
          </li>
        </ul>
      </CharacterBody>
    </CharacterInfoWrapper>
  )
}

export default CharacterInfo
