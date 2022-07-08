import { useEffect, useMemo, useState } from 'react'

import { useMarvelService } from '../../../services/MarvelService'

import styled from 'styled-components'

import { device } from '../../../styles/styled-components/queries'
import { Button, Link, StyledReactRouterLink } from '../../controls'
import Spinner from '../../elements/Spinner/Spinner'
import ErrorMessage from '../../elements/ErrorMessage/ErrorMessage'

import decoration from '../../../img/Decoration.png'

const Wrapper = styled.div`
  display: flex;

  box-shadow: 5px 5px 1.25rem rgba(0, 0, 0, 0.25);

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    min-height: 240px;
    padding: 30px;

    img {
      max-width: 100%;
      height: 180px;
    }

    div {
      margin-left: 1.875rem;
      width: 100%;

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      p {
        margin-top: 10px;
        line-height: 1.3;
        font-size: 14px;
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 0 10px;

        max-width: 250px;

        margin-top: 15px;
        margin-left: 0;
      }
    }

    &:last-child {
      position: relative;

      padding-right: 30px;

      flex-direction: column;
      align-items: stretch;

      background-color: var(--main-bg-color);

      color: var(--main-text-white);

      font-size: 1.5rem;

      img {
        position: absolute;
        left: 70%;
        top: 25%;
        z-index: 1;

        pointer-events: none;
      }

      h3 {
        line-height: 1.2;
        max-width: 85%;
        z-index: 2;
      }

      p {
        margin-top: 10%;
        padding-bottom: 10px;
        z-index: 2;
      }

      button {
        margin-top: auto;
        z-index: 2;
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column;

    .item {
      width: 100%;

      &:last-child {
        background-position-y: 80%;
        background-position-x: 105%;

        img {
          left: 80%;
          top: 10%;
        }

        p {
          margin-top: 5%;
          padding-bottom: 20px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .item {
      flex-direction: column;

      &:first-child {
        text-align: center;

        div {
          margin: 0;

          div {
            margin-top: 20px;

            max-width: 100%;

            justify-content: center;
            gap: 0 5%;
          }
        }
      }

      h3 {
        margin-top: 20px;
      }
    }
  }

  @media ${device.customM} {
    .item:last-child {
      text-align: center;

      img {
        left: 70%;
        top: 25%;
      }

      h3 {
        margin: 0;
        max-width: 100%;
      }

      button {
        margin: 0 auto;
      }

      background: var(--main-bg-color);
    }
  }
`

const RandomCharacter = () => {
  const [char, setChar] = useState({})
  const [isCharLoading, setIsCharLoading] = useState(true)

  const { loading, error, getCharacter, clearError, cancelRequest } = useMarvelService()

  useEffect(() => {
    let isMounted = true
    if (isMounted) updateChar()

    return () => {
      isMounted = false
      cancelRequest()
    }
  }, [])

  const onCharLoaded = (char) => {
    setIsCharLoading(false)
    setChar(char)
  }

  const updateChar = () => {
    setIsCharLoading(true)
    clearError()
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

    getCharacter(id).then(onCharLoaded)
  }

  const errorMessage = useMemo(() => (error ? <ErrorMessage /> : null), [error])
  const spinner = useMemo(() => (loading ? <Spinner /> : null), [loading])
  const content = !(loading || error) ? <View char={char} /> : null
  const isLoadButtonDisabled = isCharLoading && !error

  return (
    <Wrapper id='randomCharacter'>
      <div className='item'>
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className='item'>
        <img src={decoration} alt='' width={202} height={190} />
        <h3>Random character for today! Do you want to get to know him better?</h3>
        <p>Or choose another one</p>
        <Button disabled={isLoadButtonDisabled} onClick={updateChar}>
          try it
        </Button>
      </div>
    </Wrapper>
  )
}

const View = ({ char }) => {
  let { name, description, thumbnail, homepage, id } = char

  if (description) {
    if (description.length >= 228) description = description.slice(0, 228) + '...'
  } else description = 'Description not found'

  return (
    <>
      <img src={thumbnail} width={180} height={180} alt={name ?? 'loading...'} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <StyledReactRouterLink to={`/characters/${id}`}>homepage</StyledReactRouterLink>
          <Link target='_blank' href={homepage} grey>
            wiki
          </Link>
        </div>
      </div>
    </>
  )
}

export default RandomCharacter
